import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/Hero.jsx"
import Quiz from "./components/Quiz.jsx"
function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path : '/',
      element: <div className='hero min-h-screen text-white bg-gradient-to-r from-sky-100 to-indigo-100' >
        <Hero/>
    </div>
    },
    {
      path:"/questions",
      element: <Quiz/>
    }
  ])

  return (
    <RouterProvider router = {router}>
    <></>
    </RouterProvider>
  )
}

export default App
