import axios from "axios"
import { useEffect, useState } from "react";
import Presenter from "./Presenter";

export interface TodoType {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const URL = "https://jsonplaceholder.typicode.com/todos/";

  useEffect(() => {
    (async () => {
      const resp = await axios.get(URL);
      setTodos(resp.data);
    })();
  }, []);
 
  return (
    <Presenter todos={todos}></Presenter>
  );
}