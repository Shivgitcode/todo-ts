import { useRef } from "react";
import "./App.css";
import { useTodoContext } from "./context/TodoContext";
// import Todo from "./models/todos";
import { v4 as uuid } from "uuid";
import { FiX } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
function App() {
  const { todos, setTodos, checked, setChecked } = useTodoContext();

  const inpref = useRef<HTMLInputElement>(null);

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    setTodos([
      ...todos,
      { id: uuid(), item: inpref.current!.value, isChecked: false },
    ]);
  }

  function handleTodos(id: string) {
    setTodos(todos.filter((el) => el.id !== id));
  }

  function handleCheck(id: string) {
    setTodos(
      todos.map((el) => {
        if (id === el.id) {
          setChecked(!checked);
          return { ...el, isChecked: checked };
        }
        // setChecked(!checked);
        return { ...el };

        // return {...el,isChecked:true}
      })
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter item" ref={inpref} />
        <button>+</button>
      </form>
      <ul>
        {todos.map((el) => {
          return (
            <div>
              <button
                onClick={() => {
                  handleCheck(el.id);
                }}
              >
                {el.isChecked ? (
                  <MdOutlineCheckBox></MdOutlineCheckBox>
                ) : (
                  <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
                )}
              </button>
              <li
                key={el.id}
                className={`${el.isChecked && "line-through opacity-50"}`}
              >
                {el.item}
              </li>
              <button onClick={() => handleTodos(el.id)}>
                <FiX></FiX>
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
