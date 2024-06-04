import { useState } from "react"
import "./Navbar.css"
import { MobileNav } from "./MobileNav"
import { Link } from "react-scroll";
import menu from "../assets/menu.png";
const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false)
    const toggleMenu=()=>{
        setOpenMenu(!openMenu)
    }
  return ( 
    <>

    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
        <nav className='nav-wrapper'>
            <div className='nav-content' >
                <div className='logo font-briem'>Portfolio</div>
                <ul className>
                    <li>
                    <Link to="home" smooth={true} duration={500} className='menu-item font-briem text-xl'>Home</Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500} className='menu-item font-briem text-xl'>Skills</Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500} className='menu-item font-briem text-xl'>Projects</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} className='menu-item font-briem text-xl'>Contact me</Link>
                        </li>
                    <button className='contact-btn font-briem text-xl' onClick={()=>{}}>
                        Hire Me
                    </button>
                </ul>
                <button className="menu-btn bg-black p-2 m-2" onClick={toggleMenu}>
    <span className={"material-symbols-outlined"} style={{fontSize: "1.7rem"}}>
         <img src={menu} alt="close" style={{height: "1.8rem"}} /> 
    </span>
</button>

            </div>
        </nav>
    </>
  )
}

export default Navbar