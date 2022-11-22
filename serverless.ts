import type { AWS } from '@serverless/typescript'

const serverlessConfiguration: AWS = {
  service: 'layer-api-rest',
  frameworkVersion: '3',
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'sa-east-1',
    stage: '${opt:stage, "dev"}',
  },
  package: {
    individually: true,
    excludeDevDependencies: true
  },
  layers: {
    api_rest: {
      path: './dist/layer',
      name: 'api_rest',
      compatibleRuntimes: ['nodejs14.x']
    }
  }
}

module.exports = serverlessConfiguration