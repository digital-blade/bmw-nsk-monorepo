import { initContract } from '@ts-rest/core'
import { z } from 'zod'

import { CreateOneTodoSchema } from './dto/create-one'
import { TodoSchema } from './dto/todo'

const c = initContract()

export const todoApi = c.router({
  addTodo: {
    method: 'POST',
    path: '/todos',
    summary: 'Create one todo item.',
    body: CreateOneTodoSchema,
    responses: {
      201: TodoSchema
    }
  },
  getTodos: {
    method: 'GET',
    path: '/todos',
    summary: 'Returns list of todo items.',
    query: z.object({
      take: z.union([z.number(), z.string().transform(Number)]),
      skip: z.union([z.number(), z.string().transform(Number)]),
      search: z.string().optional()
    }),
    responses: {
      200: z.object({
        items: TodoSchema.array(),
        count: z.number(),
        skip: z.number(),
        take: z.number()
      })
    }
  }
})
