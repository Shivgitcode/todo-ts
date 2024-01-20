import { useContext, useRef } from "react";
import "./App.css";
import { todoContext } from "./context/TodoContext";
// import Todo from "./models/todos";
import { v4 as uuid } from "uuid";

function App() {
  const value = useContext(todoContext);
  const inpref = useRef<HTMLInputElement>(null);

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    value?.setTodos([
      ...value.todos,
      { id: uuid(), item: inpref.current!.value },
    ]);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter item" ref={inpref} />
        <button>+</button>
      </form>
      <ul>
        {value?.todos.map((el) => {
          return <li>{el.item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
