import React from 'react'
import './hero.scss';
import { motion } from 'framer-motion';

const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
};
const sliderVariants={
  initial:{
    x:0,
  },
  animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      repeatType: "mirror",
      duration:20,
    },
  },
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div className='textContainer' variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>ABHAY SEMWAL</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <motion.a href="https://drive.google.com/file/d/11yWjt6Xmf5QoUtJoUxVCkkDbi9rPdZ7l/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" variants={textVariants}>
                <motion.button variants={textVariants}>
                  View Resume
                </motion.button>
              </motion.a>
            <motion.a href='#Contact' variants={textVariants}><motion.button variants={textVariants}>Contact me</motion.button></motion.a>
          </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src='/scroll.png' alt=''></motion.img>
        </motion.div>
      </div>
      <motion.div className='slidingTextContainer' variants={sliderVariants} initial="initial" animate="animate">
        Full Stack Web Developer
      </motion.div>
      {/* <div className='imageContainer'>
          <img src='/programmer.jpg' alt=''></img>
      </div> */}
    </div>
  )
}

export default Hero