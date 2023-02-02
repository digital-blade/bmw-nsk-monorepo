import { Injectable } from '@nestjs/common'
import { Prisma, Todo } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(todo: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({ data: todo })
  }

  async getTodos(take: number, skip: number, search?: string) {
    const todos = await this.prisma.todo.findMany({
      take,
      skip,
      where: {
        value: { contains: search }
      }
    })

    const totalTodos = await this.prisma.todo.count()

    return { todos, totalTodos }
  }
}
