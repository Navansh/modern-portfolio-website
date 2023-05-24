import React from 'react'
import { styles } from '../styles'
import { useState } from 'react'
import {navLinks} from '../constants'
import { logo, menu, close } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [active, setActive] = useState("")
  //this will keep track of which link are qwe currently on 
  return (
    <nav className={`${ styles.paddingX } w-full flex items-center py-5 top-0 z-20 bg-primary`}>
      <div className=' w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className=' flex gap-2 items-center' onClick={()=>{
          setActive("")
          window.scrollTo(0,0)
        }}>
        <img src={logo} alt="logo" className=' w-9 h-9 object-contain'/>
        <p className=' text-white text-[18px] cursor-pointer font-bold'>Navansh</p>
        </Link>

        <ul className=' list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((Link) => (
              <li key={Link.id} className={`${active === Link.title ? " text-white" : " text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} 
              onClick={() =>setActive(Link.title)}>
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ) )
          }
        </ul>
        
      </div>

    </nav>
  )
}

export default Navbar