echo "Create dist/package"
npm run build

echo "Package src to layer"
npm run build:esbuild

echo "Deploy to serverless | STAGE: DEV"
npm run deploy:dev