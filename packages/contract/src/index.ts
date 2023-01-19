import { initContract } from '@ts-rest/core'

import { todoApi } from './todos'

const c = initContract()

export const contract = c.router({
  todoApi
})
