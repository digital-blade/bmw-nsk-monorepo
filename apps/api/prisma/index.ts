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
    }
  ]
}).export(__dirname, 'schema')
