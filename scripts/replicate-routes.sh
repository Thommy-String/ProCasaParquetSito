#!/usr/bin/env bash
set -euo pipefail

OUTDIR="dist"
SRC="$OUTDIR/index.html"

ROUTES=(
  "servizi/posa-parquet-prefinito-milano"
  "servizi/posa-parquet-prefinito-flottante-milano"
  "servizi/posa-parquet-prefinito-spina-milano"
  "servizi/posa-pavimento-spc-milano"
  "servizi/posa-pavimento-laminato-milano"
  "servizi/posa-battiscopa-milano"
  "servizi/rivestimento-scale-milano"
)

for r in "${ROUTES[@]}"; do
  mkdir -p "$OUTDIR/$r"
  cp "$SRC" "$OUTDIR/$r/index.html"
  echo "✅ $OUTDIR/$r/index.html creato"
done

echo "🎉 Finito. Ora carica TUTTO il contenuto di dist/ su Aruba."