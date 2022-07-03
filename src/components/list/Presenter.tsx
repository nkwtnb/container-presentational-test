import { TodoType } from "./ListContainer"

export interface PresenterProps {
  todos: TodoType[]
}

export default (props: PresenterProps) => {
  return (
    <div className="wrapper">
      {
        props.todos.length === 0
        ?
          <span data-testid="no-todos">データなし</span>
        :
          <div data-testid="todos">
          {
            props.todos.map((todo: any, index: number) => {
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