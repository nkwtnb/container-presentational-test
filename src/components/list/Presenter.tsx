import { TodoType } from "./ListContainer"

export default ({todos}: {todos: TodoType[]}) => {
  return (
    <div className="wrapper">
      {
        todos.length === 0
        ?
          <span data-testid="no-todos">データなし</span>
        :
          <div data-testid="todos">
          {
            todos.map((todo: any, index: number) => {
              return (
                <div key={index}>
                  {todo.title}
                </div>
              )
            })
          }
          </div>
      }
    </div>
  )
}