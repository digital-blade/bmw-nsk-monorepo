import { initContract } from '@ts-rest/core'
import { TodoCreateOneSchema } from 'database'

const c = initContract()

export const todoApi = c.router({
  addTodo: {
    method: 'POST',
    path: '/todos',
    responses: {
      201: {}
    },
    body: TodoCreateOneSchema,
    summary: 'Create TODO'
  }
})
