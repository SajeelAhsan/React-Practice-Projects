import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos';
import './App.css'

function App() {


  return (
    <>
      <div className="text-[#8b8d8c] container mx-auto px-4">
        <h1 className="bg-[#2c435e]  text-2xl font-bold  mb-8 mt-2 ">MANAGE TODO LIST</h1>
      </div>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
