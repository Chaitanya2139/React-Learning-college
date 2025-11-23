import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Students</h1>
      < Student name="Chaitanya Awasthi" age={20} course="Computer Science" />
      < Student name="Rahul Mishra" age={22} course="Mathematics" />
      < Student name="Amit Tiwari" age={19} course="Physics" />
    </>
  )
}

export default App
