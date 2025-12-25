import { promises as fs } from 'fs';
import path from 'path';

const srcRoot = path.resolve('src/pages/servizi');
const destRoot = path.resolve('dist/servizi');

async function exists(dir) {
  try {
    await fs.access(dir);
    return true;
  } catch {
    return false;
  }
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copied += await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      if (path.extname(entry.name) === '.jsx') {
        continue;
      }
      await fs.copyFile(srcPath, destPath);
      copied += 1;
    }
  }

  return copied;
}

async function main() {
  if (!(await exists(srcRoot))) {
    console.warn(`[copy-servizi] sorgente mancante: ${srcRoot}`);
    return;
  }

  await fs.mkdir(path.resolve('dist'), { recursive: true });
  const total = await copyDir(srcRoot, destRoot);
  console.log(`[copy-servizi] Copiati ${total} file in ${destRoot}`);
}

main().catch((error) => {
  console.error('[copy-servizi] Errore durante la copia delle pagine servizi:', error);
  process.exitCode = 1;
});
