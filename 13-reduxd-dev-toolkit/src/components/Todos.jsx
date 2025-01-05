import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, updateTodo, removeTodo } from "../features/todo/todoSlice";
import todoReducer from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector(state => state.todos);
  const disPatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-[#2d5583] px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-[#c7d9ed]'>{todo.title}</div>
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-[#316373] hover:bg-gray-100 shrink-0"
              onClick={() => disPatch(removeTodo(todo.id))}
            >❌
            </button>
          </li>
        ))}
      </ul>
    </>

  );
}
export default Todos;