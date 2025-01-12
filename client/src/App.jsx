import { Fragment } from 'react'
import './App.css'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
// import Footer from './pages/Footer.jsx'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Services />
    </Fragment>
  )
}

export default App
