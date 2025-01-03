import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Progile from './Components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
      <Progile />
    </UserContextProvider>
  )
}

export default App
