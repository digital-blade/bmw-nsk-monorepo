import { api } from 'shared/api'

import './App.css'

export function App() {
  const { data, isLoading } = api.todo.getTodos.useQuery(['todos'], {
    query: {
      take: 5,
      skip: 0
    }
  })

  return (
    <div className="App">
      <h1>My todos</h1>
      <div className="card">
        <>
          {isLoading && <h2>Loading...</h2>}
          {!data && <h2>Todos not found</h2>}

          {data && data.body.items.map((todo) => <li key={todo.id}>{todo.value}</li>)}
        </>
      </div>
    </div>
  )
}
