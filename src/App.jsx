
import './App.css'
import Hero from './compont/sections/hero'
import Navbar from "./compont/sections/Navbar"
import MyProject from "../src/compont/sections/project/MyProject"
import Skills from '../src/compont/sections/skills/Skills'
import SE from "../src/compont/sections/skills/SE"
import Contact from '../src/compont/sections/Contact/contactMy'
import Footer from './compont/sections/Footer'



function App() {
 
  return (
   <main>
    <Navbar />
    <Hero />
    <MyProject />
    <Skills />
    <SE />
    <Contact />
    <Footer />
   </main>
  )
}

export default App
