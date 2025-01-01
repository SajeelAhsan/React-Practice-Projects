import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className="duration-200" style={{ backgroundColor: color, height: "100vh" }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4  rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4  rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button 
          onClick={() => setColor("olive")}
          className="outline-none px-4  rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}
          >Olive</button>
          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4  rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>
          <button 
          onClick={() => setColor("navy")}
          className="outline-none px-4  rounded-full text-white shadow-lg"
          style={{backgroundColor: "navy"}}
          >Navy</button>
          <button
          onClick={() => setColor("purple")}
          className="outline-none px-4  rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple</button>
          <button 
          onClick={() => setColor("royalblue")}
          className="outline-none px-4  rounded-full text-white shadow-lg"
          style={{backgroundColor: "royalblue"}}
          >Royal Blue</button>
          <button 
          onClick={() => setColor("olive")}
          className="outline-none px-4  rounded-full text-white shadow-lg"
          style={{backgroundColor: "teal"}}
          >Teal</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
