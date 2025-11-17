import './App.css';
import Logo from './components/Header/logo'
import NavMenu from './components/Header/NavMenu'

function App() {
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white headerCointainer">
        <Logo />
        <NavMenu />
      </div>
    </>
  )
}

export default App