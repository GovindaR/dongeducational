#!/usr/bin/env bash
# Regenerate favicons from public/logo.png (uses the left icon mark).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC="$ROOT/public"
APP="$ROOT/src/app"

cd "$PUBLIC"

sips --cropOffset 120 0 --cropToHeightWidth 820 820 logo.png --out logo-mark.png
sips -z 32 32 logo-mark.png --out favicon.png
sips -z 48 48 logo-mark.png --out icon-48.png
sips -z 192 192 logo-mark.png --out icon-192.png
sips -z 180 180 logo-mark.png --out apple-touch-icon.png

cp favicon.png "$APP/icon.png"
cp apple-touch-icon.png "$APP/apple-icon.png"

rm -f logo-mark.png

echo "Favicons updated from logo.png"
