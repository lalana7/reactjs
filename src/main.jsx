import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import TODOmain from './components/TODOmain.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App /> 
    {/* <Navbar />
   <TODOmain/> */}
  </React.StrictMode>,

)
