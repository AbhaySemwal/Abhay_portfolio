import "./navbar.scss"
import React from 'react'
import { animate, motion } from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span 
          initial={{opacity:0,scale:0.5}}
          animate={{opacity:1,scale:1}}
          transition={{duration:0.5}}>
          Abhay Semwal
        </motion.span>
        <div className="social">
          <a target="blank" href="https://www.linkedin.com/in/abhay-semwal-5092a0226/"><img src="/linkedin.png"></img></a>
          <a target="blank" href="https://github.com/AbhaySemwal"><img src="/github.png"></img></a>
          {/* <a target="blank" href="https://www.instagram.com/abhay_semwal_01/"><img src="/instagram.png"></img></a> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar