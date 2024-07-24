import React from 'react'
import { IoSunnySharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import { useTheme } from '../ThemeProvider';
import './Navbar.css';

const Navbar = () => {
const {theme, toggleTheme} = useTheme()
  const [toggle, setToggle] = React.useState(true);

  return (
    <div className={`nav-bar ${theme} `}>
        <ul>
            <a href="#" className='logo'> News Today</a>
            <div className="right">
              <a href="https://linktr.ee/prajinsmicheal">Contacts</a>
              <button onClick={()=>{toggleTheme(
                
              );setToggle(!toggle)}}>{toggle?<IoSunnySharp/>:<FaRegMoon/>}</button>
            </div>
        </ul>
    </div>
  )
}

export default Navbar
