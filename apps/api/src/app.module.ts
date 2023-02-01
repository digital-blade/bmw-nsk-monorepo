import { Module } from '@nestjs/common'
import { PrismaModule } from 'nestjs-prisma'

import { TodosModule } from './todos/todos.module'

@Module({
  imports: [PrismaModule.forRoot(), TodosModule]
})
export class AppModule {}
