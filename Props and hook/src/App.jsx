import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocusInput from './components/FocusInput'
import Count from './components/Count'
import Parent from './components/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < FocusInput />
      < Count />
      < Parent />
    </>
  )
}

export default App
