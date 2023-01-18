import { Logger } from '@nestjs/common'
import { loggingMiddleware, PrismaModuleOptions, QueryInfo } from 'nestjs-prisma'

export const DATABASE_CONFIG = 'DATABASE'

type Return = { [DATABASE_CONFIG]: PrismaModuleOptions }

export const databaseConfiguration = (): Return => ({
  [DATABASE_CONFIG]: {
    isGlobal: true,
    prismaServiceOptions: {
      prismaOptions: {
        datasources: {
          db: {
            url: process.env.DATABASE_URL
          }
        }
      },
      middlewares: [
        loggingMiddleware({
          logger: new Logger('Prisma'),
          logLevel: 'log',
          logMessage: (query: QueryInfo) => `[Prisma Query] ${query.model}.${query.action} - ${query.executionTime}ms`
        })
      ]
    }
  }
})
