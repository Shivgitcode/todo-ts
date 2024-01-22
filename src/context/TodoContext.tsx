import { Children, ReactNode, createContext } from "react";
import Todo from "../models/todos";
import { useState } from "react";

export const todoContext = createContext<Value>(null!);

interface myProp {
  children: ReactNode;
}

interface Value {
  todos: Todo[];
  setTodos(prev: Todo[]): void;
}

export default function TodoContextData({ children }: myProp): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);

  const value: Value = {
    todos,
    setTodos,
  };

  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
}
