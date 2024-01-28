import { Children, ReactNode, createContext, useContext } from "react";
import Todo from "../models/todos";
import { useState } from "react";

export const todoContext = createContext<Value | null>(null);

interface myProp {
  children: ReactNode;
}

interface Value {
  todos: Todo[];
  checked: boolean;
  // setTodos(prev: Todo[]): void;
  // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setTodos: (prev: Todo[]) => void;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TodoContextData({ children }: myProp): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [checked, setChecked] = useState<boolean>(true);

  const value: Value = {
    todos,
    setTodos,
    checked,
    setChecked,
  };

  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
}

export function useTodoContext() {
  const context = useContext(todoContext);
  if (context === null) {
    throw new Error("useTodoContext must be used within a TodoContextData");
  }
  return context;
}
