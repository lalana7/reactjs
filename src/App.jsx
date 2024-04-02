import { useState } from 'react'
import Navbar from './components/Navbar'
import TODOmain from './components/TODOmain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <TODOmain/>
    </>
  )
}

export default App
