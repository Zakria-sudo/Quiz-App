import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/Hero.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='hero min-h-screen bg-gray-900 text-white' style={{ backgroundColor :'#121212 '}}>
     <Hero/>
    </div>
    </>
  )
}

export default App
