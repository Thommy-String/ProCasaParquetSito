/**
 * Ottimizza tutte le immagini JPG/JPEG/PNG > 80KB → WebP compresso.
 * Mantiene i file originali come backup (.bak) e aggiorna i riferimenti nel codice.
 * 
 * Uso: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat, readFile, writeFile, rename } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';

const IMAGE_DIRS = [
  'src/assets/images/parquet',
  'src/assets/images/primaDopoLavori',
];

const MIN_SIZE = 80 * 1024; // 80KB — sotto non vale la pena
const WEBP_QUALITY = 78;     // Buon compromesso qualità/peso
const MAX_WIDTH = 1200;       // Nessuna immagine serve più larga di 1200px su mobile

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const s = await stat(fullPath);
        if (s.size > MIN_SIZE) {
          files.push({ path: fullPath, size: s.size, ext });
        }
      }
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const dir = dirname(filePath);
  const name = basename(filePath, extname(filePath));
  const webpPath = join(dir, `${name}.webp`);

  try {
    const metadata = await sharp(filePath).metadata();
    const needsResize = metadata.width > MAX_WIDTH;

    let pipeline = sharp(filePath);
    if (needsResize) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }
    
    await pipeline
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(webpPath);

    const newStat = await stat(webpPath);
    const origStat = await stat(filePath);
    const savings = ((1 - newStat.size / origStat.size) * 100).toFixed(1);

    return {
      original: filePath,
      webp: webpPath,
      originalSize: origStat.size,
      newSize: newStat.size,
      savings: `${savings}%`,
    };
  } catch (err) {
    console.error(`❌ Errore su ${filePath}:`, err.message);
    return null;
  }
}

async function updateImports(results) {
  // Trova tutti i file .jsx e .js nella src/
  const srcFiles = [];
  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const p = join(dir, e.name);
      if (e.isDirectory() && !e.name.includes('node_modules')) {
        await walk(p);
      } else if (e.isFile() && (e.name.endsWith('.jsx') || e.name.endsWith('.js'))) {
        srcFiles.push(p);
      }
    }
  }
  await walk('src');

  let totalReplacements = 0;

  for (const srcFile of srcFiles) {
    let content = await readFile(srcFile, 'utf-8');
    let changed = false;

    for (const r of results) {
      if (!r) continue;
      // Trova il percorso relativo dell'immagine originale usato nei file
      const origExt = extname(r.original);
      const origName = basename(r.original, origExt);
      
      // Pattern: qualcosa.jpg, qualcosa.jpeg, qualcosa.png → qualcosa.webp
      // Gestisce sia ' che " e percorsi relativi
      const regex = new RegExp(
        `(['"\`/])([^'"\`]*/${origName})\\${origExt}(['"\`])`,
        'g'
      );
      
      const newContent = content.replace(regex, `$1$2.webp$3`);
      if (newContent !== content) {
        content = newContent;
        changed = true;
        totalReplacements++;
      }
    }

    if (changed) {
      await writeFile(srcFile, content, 'utf-8');
      console.log(`  📝 Aggiornato: ${srcFile}`);
    }
  }
  
  console.log(`\n  Totale file sorgente aggiornati: ${totalReplacements}`);
}

async function main() {
  console.log('🖼️  Ottimizzazione immagini → WebP\n');

  let allFiles = [];
  for (const dir of IMAGE_DIRS) {
    const files = await getFiles(dir);
    allFiles.push(...files);
  }

  console.log(`Trovate ${allFiles.length} immagini > ${MIN_SIZE / 1024}KB\n`);

  const results = [];
  let totalSaved = 0;

  for (const file of allFiles) {
    // Salta se esiste già un .webp con lo stesso nome E il file corrente è un .png duplicato
    const webpExists = await stat(
      join(dirname(file.path), `${basename(file.path, file.ext)}.webp`)
    ).catch(() => null);
    
    // Se il file è un PNG e esiste già il JPG corrispondente, skippa (è un duplicato)
    if (file.ext === '.png') {
      const jpgExists = await stat(
        join(dirname(file.path), `${basename(file.path, '.png')}.jpg`)
      ).catch(() => null);
      if (jpgExists) {
        console.log(`⏭️  Skip duplicato PNG: ${basename(file.path)}`);
        continue;
      }
    }

    // Se esiste già un webp più piccolo, skippa
    if (webpExists && webpExists.size < file.size * 0.9) {
      console.log(`⏭️  WebP già presente: ${basename(file.path)}`);
      continue;
    }

    process.stdout.write(`🔄 ${basename(file.path)} (${(file.size / 1024).toFixed(0)}KB) → `);
    const result = await optimizeImage(file.path);
    if (result) {
      console.log(`${(result.newSize / 1024).toFixed(0)}KB (-${result.savings})`);
      totalSaved += result.originalSize - result.newSize;
      results.push(result);
    }
  }

  console.log(`\n✅ Totale risparmiato: ${(totalSaved / 1024 / 1024).toFixed(1)}MB`);

  // Aggiorna i riferimenti nei file sorgente
  console.log('\n📝 Aggiornamento import nei file sorgente...');
  await updateImports(results);

  console.log('\n🎉 Fatto! Esegui `npm run build` per verificare.');
}

main().catch(console.error);
