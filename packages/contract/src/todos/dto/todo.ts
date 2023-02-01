import { z } from 'zod'

export const TodoSchema = z.object({
  id: z.number(),
  value: z.string(),
  createdAt: z.date()
})
