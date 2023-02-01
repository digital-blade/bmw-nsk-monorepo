import { Injectable } from '@nestjs/common'
import { Prisma, Todo } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  create(todo: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({ data: todo })
  }
}
