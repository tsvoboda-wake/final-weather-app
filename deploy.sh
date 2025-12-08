#!usr/bin/env sh

set -e

npm run build

cd dist

git init
git add .
git commit -m "GitHub Pages Deployment"
git push -f git@github.com:tsvoboda-wake/final-weather-app.git main:gh-pages

cd -