import { Module } from '@nestjs/common'
import { PrismaModule } from 'nestjs-prisma'

import { TodosController } from './todos.controller'
import { TodosService } from './todos.service'

@Module({
  imports: [PrismaModule],
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
