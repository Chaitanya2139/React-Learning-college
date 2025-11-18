import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Button'
import Handlers from './components/Handlers'
import Greet from './components/Handlers1'
import FormHandler from './components/formHandler'
import Handlers2 from './components/Handlers2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Counter />
      < Handlers />
      < Greet />
      < FormHandler />
      < Handlers2 />
    </>
  )
}

export default App
