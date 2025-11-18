import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Button'
import Handlers from './components/Handlers'
import Greet from './components/Handlers1'
import FormHandler from './components/formHandler'
import Handlers2 from './components/Handlers2'
import FetchApi from './components/FetchApi'
import StateChange from './components/State_change'
import Interval from './components/Interval'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Counter />
      < Handlers />
      < Greet />
      < FormHandler />
      < Handlers2 />
      < FetchApi />
      < StateChange />
      < Interval />
    </>
  )
}

export default App
