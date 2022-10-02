import React from 'react'
import './Navbar.scss'
import {images,data} from '../../constants/index'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {motion} from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
const [toggle,setToggle]=useState(false)
    return (
    <nav className='app__navbar'>
        <div className='app_navbar-logo'>
            {/* <img src={images.logo} alt="" className='app_navbar-logoImage'/> */}
            <h2 className='app_navbar-logoText'>{data.Heading}</h2>

        </div>
        <ul className='app__navbar-links'>
            {['home','about','work','skill','testimonial','contact'].map((item)=>{
                return <li key={`link-${item}`} className={"app__flex p-text"}>
                    <div />
                    <a key={`link-12${item}`} href={`#${item}`}>
                        {item}
                    </a>
                </li>
            })}
        </ul>
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={()=>{setToggle(true)}}/>
            1{
                toggle&& (
                    <motion.div
                    whileInView={{x:[300,0]}}
                    transition={{duration:0.85,ease:'easeOut'}}>
                    <HiX onClick={()=>{setToggle(false)}}/>
                    <ul>
                     {['home', 'about', 'work', 'skills','testimonial', 'contact'].map((item) => (
                       <li key={`item-${item}`}>
                         <a key={`item-link-${item}`} href={`#${item}`} onClick={() => setToggle(false)}>
                           {item}
                         </a>
                       </li>
                     ))}
                   </ul>
                    </motion.div>
                )}
        </div>
    </nav>
  )
}

export default Navbar