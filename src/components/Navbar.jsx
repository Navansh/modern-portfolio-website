import { styles } from '../styles'
import { useState } from 'react'
import {navLinks} from '../constants'
import { logo, menu, close } from '../assets'
import { Link } from 'react-router-dom'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle,setToggle] = useState(false)
  //this will keep track of which link are qwe currently on 

  function clickHandler(Link){
    setActive(Link.title)
    console.log(Link.title)
    if (Link.title==="Home") {
      window.scrollTo(0,0)
    }
  }
  return (
    <nav className={`${ styles.paddingX } w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className=' w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className=' flex gap-2 items-center' onClick={()=>{
          setActive("")
          window.scrollTo(0,0)
        }}>
        <img src={logo} alt="logo" className=' w-9 h-9 object-contain'/>
        <p className=' text-white text-[18px] cursor-pointer font-bold'>Navansh</p>
        </Link>

        <div className=' flex flex-row gap-5 items-center '>
          <a href="https://github.com/Navansh" target=' _blank'>
            <BsGithub className=' text-2xl hover:scale-110'></BsGithub>
          </a>
          <a href="https://www.linkedin.com/in/navansh-khandelwal/" target=' _blank'>
            <BsLinkedin className=' text-2xl hover:scale-110'></BsLinkedin>
          </a>
          <ul className=' list-none hidden md:flex flex-row gap-10 items-center'>

            {
              navLinks.map((Link) => (
                <li key={Link.id} className={`${active === Link.title ? " text-white" : " text-secondary"} ${Link.title === "Contact" ? " tagline scale-75 text-white" : ""} hover:text-white text-[18px] font-medium cursor-pointer`} 
                onClick={() =>clickHandler(Link)}>
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ) )
            }
            
          </ul>
          
          {/* this is for mobile navigation bar  */}
          <div className=' md:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu} alt="menu" className=' w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=> setToggle(!toggle) } />
            <div className={`${ !toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>

              <ul className=' list-none flex md:hidden justify-end items-start flex-col gap-4'>        
                    {
                      navLinks.map((Link) => (
                        <li key={Link.id} className={`${active === Link.title ? " text-white" : " text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} 
                        onClick={() => {
                        clickHandler(Link)
                        setToggle(!toggle)
                        }}>
                          <a href={`#${Link.id}`}>{Link.title}</a>
                        </li>
                      ) ) 
                  }
                    
                  
              </ul>
            </div>
          </div>
          {/* code for mobile specific navbar ends  */}
        </div>
        

      </div>

    </nav>
  )
}

export default Navbar