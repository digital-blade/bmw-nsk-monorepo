import { Controller } from '@nestjs/common'
import { nestControllerContract, NestRequestShapes, NestResponseShapes, TsRest, TsRestRequest } from '@ts-rest/nest'
import { todoApi } from 'contract'

import { TodosService } from './todos.service'

const c = nestControllerContract(todoApi)
type RequestShapes = NestRequestShapes<typeof c>
type ResponseShapes = NestResponseShapes<typeof c>

@Controller()
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @TsRest(c.addTodo)
  async create(@TsRestRequest() { body: todo }: RequestShapes['addTodo']): Promise<ResponseShapes['addTodo']> {
    const createdTodo = await this.todosService.create(todo)

    return { status: 201, body: createdTodo }
  }

  @TsRest(c.getTodos)
  async getPosts(
    @TsRestRequest()
    { query: { take, skip, search } }: RequestShapes['getTodos']
  ): Promise<ResponseShapes['getTodos']> {
    const { todos, totalTodos } = await this.todosService.getTodos(take, skip, search)

    return {
      status: 200 as const,
      body: { items: todos, count: totalTodos, skip, take }
    }
  }
}
