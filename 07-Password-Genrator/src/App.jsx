import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [CharacterAllowed, setChracterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenrator = useCallback(() =>{
    let generatedPassword = ""
    let str= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
   if(numberAllowed) str += "0123456789"
    if(CharacterAllowed) str += "!@#$%^&*()_+"
    for(let i = 1; i <= length; i++){
     let char = Math.floor(Math.random() * str.length +1)
     generatedPassword += str.charAt(char)
    }
    setPassword(generatedPassword)
  }, [length, numberAllowed, CharacterAllowed, setPassword])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,36);
    window.navigator.clipboard.writeText(passwordRef.current.value)
    
  }, [password])
  useEffect(() => {
    passwordGenrator()}, [length, numberAllowed, CharacterAllowed, passwordGenrator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 bg-gray-800 text-orange-500 '>
        <h1 className='text-white text-center my-3'>Password Genrator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
        type='text'
        value={password}
        readOnly
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-teal-500 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-1'>
            <input
             type="range"
             min={8}
             max={36}
             value={length}
             className='cursor-pointer'
             onChange={(e) => {setLength(e.target.value)}}
             />
             <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input
             type="checkbox"
             daufaultChecked={numberAllowed}
             id='numberInput'
            onChange={(e) => {setNumberAllowed((prev) => !prev)}}
             />
             <label htmlFor='numberInput'>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input
             type="checkbox"
             daufaultChecked={CharacterAllowed}
             id='numberInput'
            onChange={(e) => {setChracterAllowed((prev) => !prev)}}
             />
             <label htmlFor='numberInput'>Charactor</label>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
