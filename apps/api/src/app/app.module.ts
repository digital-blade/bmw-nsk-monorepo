import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { PrismaModule } from 'nestjs-prisma'

import { DATABASE_CONFIG, databaseConfiguration } from './config/database'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfiguration]
    }),
    PrismaModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get(DATABASE_CONFIG),
      inject: [ConfigService]
    })
  ]
})
export class AppModule {}
