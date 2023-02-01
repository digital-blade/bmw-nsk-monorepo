import { initContract } from '@ts-rest/core'

import { CreateOneTodoSchema } from './dto/create-one'
import { TodoSchema } from './dto/todo'

const c = initContract()

export const todoApi = c.router({
  addTodo: {
    method: 'POST',
    path: '/todos',
    responses: {
      201: TodoSchema
    },
    body: CreateOneTodoSchema,
    summary: 'Create TODO'
  }
})
