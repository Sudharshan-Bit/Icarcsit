import { useState } from 'react'
import './App.css'
// import Header from './Components/Header'
// import Footer from './Components/Footer'
import AppRouter from './Router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <AppRouter/>
    </div>
    </>
  )
}

export default App
