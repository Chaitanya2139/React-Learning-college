import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Booklist from './components/Booklist'
import Dashboard from './components/Dashboard'
import ThemeProvider from './components/ThemeProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
        < Booklist />
      </ThemeProvider>
      <Dashboard />
      
    </>
  )
}

export default App
