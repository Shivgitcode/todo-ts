import { Children, ReactNode, createContext } from "react";
import Todo from "../models/todos";
import { useState } from "react";

export const todoContext = createContext<>(null);

interface myProp {
  children: ReactNode;
}

function TodoContextData({ children }: myProp) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const value = {
    todos,
    setTodos,
  };

  <todoContext.Provider value={value}>{children}</todoContext.Provider>;
}
