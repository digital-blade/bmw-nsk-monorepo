import { z } from 'zod'

export const CreateOneTodoSchema = z.object({
  value: z.string().transform((v) => v.trim())
})
