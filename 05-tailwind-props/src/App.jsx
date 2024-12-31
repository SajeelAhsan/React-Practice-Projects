import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
   src="https://render.fineartamerica.com/images/rendered/default/shower-curtain/images-medium-5/80-imperial-blue-butterfly-amy-kirkpatrick.jpg?&targetx=72&targety=88&imagewidth=642&imageheight=642&modelwidth=787&modelheight=819&backgroundcolor=ffffff&orientation=0"
     alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sajeel Ahsan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Software & Devops Engineer
      </div>
    </figcaption>
  </div>
</figure>
  <Card />
  <Card/>
    </>
  )
}

export default App
