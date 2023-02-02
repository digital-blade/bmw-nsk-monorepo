import { initQueryClient } from '@ts-rest/react-query'
import axios, { Method } from 'axios'
import { contract } from 'contract'

const baseUrl = 'http://localhost:5000'

export const api = initQueryClient(contract, {
  baseUrl,
  baseHeaders: {},
  api: async ({ path, method, headers, body }) => {
    const result = await axios.request({
      method: method as Method,
      url: path,
      headers,
      data: body
    })
    return { status: result.status, body: result.data }
  }
})
