import React, { useRef } from 'react'
import './portfolio.scss';
import { motion,useScroll,useSpring, useTransform } from 'framer-motion';

const items=[
    {
        id:1,
        title:"Chitchat",
        img:"/Screenshot_20240629_011216.png",
        desc:"A chat app built with React.js and Firebase. It offers real-time messaging, user authentication, and a sleek user interface designed for seamless communication.",
        lnk:"https://chitchat-flame.vercel.app"
    },
    {
        id:2,
        title:"Snapbites",
        img:"/Screenshot_20240629_011444.png",
        desc:"A microblogging platform based on Next.js and MongoDB. It provides users with a space to share short posts, follow others, and engage with content in a fast and efficient manner.",
        lnk:"https://snapbites.vercel.app"
    },
    {
        id:3,
        title:"Weoutside",
        img:"/Screenshot_20240629_011912.png",
        desc:"A Next.js application featuring community engagement tools. It enables users to create and join communities, share posts, and interact with others in a dynamic and user-friendly environment.",
        lnk:"https://weoutside.vercel.app"
    },
    {
        id:4,
        title:"Anifinity",
        img:"/Screenshot_20240629_012113.png",
        desc:"A captivating landing page for anime enthusiasts, offering immersive experiences and curated content to explore your favorite anime series and movies.",
        lnk:"https://anifinity-react.vercel.app/"
    },
]

const Single=({item})=>{
    const ref=useRef();
    const {scrollYProgress}=useScroll({target:ref,
        // offset:["start start","end start"]
    });
    const y=useTransform(scrollYProgress,[0,1],[-300,300]);
    return(
        <section>
            <div className='container'>
                <div className='wrapper'>
                    <div className='imageContainer' ref={ref}>
                        <img src={item.img} alt=''></img>
                    </div>
                    <motion.div className='textContainer' style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a target='blank' href={item.lnk}><button>See Demo</button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const Portfolio = () => {
    const ref=useRef();
    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]});
    const scaleX=useSpring(scrollYProgress,
        {stiffness:100,
        damping:30,});
  return (
    <div className='portfolio' ref={ref}>
        <div className='progress'>
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className='progressBar'></motion.div>
        </div>
        {
            items.map(item=>(
                <Single item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Portfolio