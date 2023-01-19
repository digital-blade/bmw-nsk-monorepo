import { createSchema } from 'schemix'

createSchema({
  basePath: __dirname,
  datasource: {
    provider: 'postgresql',
    url: { env: 'DATABASE_URL' }
  },
  generator: [
    {
      name: 'client',
      provider: 'prisma-client-js',
      output: '../node_modules/.prisma/client'
    },
    {
      name: 'zod',
      provider: 'prisma-zod-generator',
      output: '../src/zod'
    }
  ]
}).export(__dirname, 'schema')
