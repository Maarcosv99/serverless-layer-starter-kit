echo "Create dist/package"
npm run build

echo "Package src to layer"
npm run build:esbuild

echo "Deploy to serverless | STAGE: PROD"
npm run deploy:prod