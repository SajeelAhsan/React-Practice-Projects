import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState([]);
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput([]);
  };

  return (
    <form onSubmit={addTodoHandler} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-[#3c4a59] py-1.5"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Correct state updater function
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-[#399188] text-[#aceae2] shrink-0 hover:bg-[#0d2e2d]"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
