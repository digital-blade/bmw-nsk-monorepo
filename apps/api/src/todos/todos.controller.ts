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
  create(@TsRestRequest() todo: RequestShapes['addTodo']['body']): Promise<ResponseShapes['addTodo']> {
    return this.todosService.create(todo)
  }
}
