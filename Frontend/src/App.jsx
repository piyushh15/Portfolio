import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css"
import Skills from "./components/Skills";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Hero/> 
    </div>
    <div className="container2">
    <Skills/> 
    </div>
    <div className="container3">
      <Tech/>
    </div>
    <div className="container4">
      <Projects/>
    </div>
    <div className="container5">
      <Contact/>
    </div>
    </>
  )
}