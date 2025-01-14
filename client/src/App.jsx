import { Fragment } from 'react'
import './App.css'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Team from './pages/Team.jsx'
// import Footer from './pages/Footer.jsx'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Team />
    </Fragment>
  )
}

export default App
