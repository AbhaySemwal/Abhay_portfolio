import React, { useRef, useEffect, useState } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsAnimated(true);
    }
  }, [isInView]);

  return (
    <motion.div 
      className='services' 
      ref={ref} 
      variants={variants} 
      initial="initial" 
      animate={isAnimated ? "animate" : "initial"}
    >
      <motion.div className='textContainer'>
        <p>I focus on helping your brand grow and <br/> move forward</p>
        <hr/>
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp'></img>
          <h1>
            <motion.b whileHover={{color:"orange"}}>Crafting</motion.b> Web
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileHover={{color:"orange"}}>Solutions</motion.b> for you.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div className='box' whileHover={{backgroundColor:"lightgray",color:"black"}}>
          <h2>Front-End Development</h2>
          <p>
          I specialize in creating intuitive and engaging user interfaces. By leveraging modern frameworks like React and Next, I ensure that your users enjoy a seamless and interactive experience across all devices.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
          <h2>Back-End Development</h2>
          <p>
          Behind every great website is a solid back-end infrastructure. I build reliable and efficient server-side solutions using technologies like Node.js, Express, and Flask, ensuring your data is managed securely and your applications run smoothly.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
          <h2>Full Stack Integration</h2>
          <p >
          Bringing together the best of both worlds, I offer comprehensive full stack development services. From concept to deployment, I handle every aspect of your web application, ensuring a cohesive and high-performing end product.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services