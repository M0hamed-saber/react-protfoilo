import React from 'react'
import { motion } from "motion/react"


export default function Contact() {
    return <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 whileInView={{opacity : 1 , y:0}} initial={{opacity:0 , y:-100}} transition={{duration: 1.5}} className='my-20 text-center text-4xl'>Get in Touch</motion.h2>
        <div className='text-center tracking-tighter'>
            <motion.p whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:-100}} transition={{duration: 1}} className='my-4'>767 Fifth Avenue,New York,NY 52520</motion.p>
            <motion.p whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:-100}} transition={{duration: 1}} className='my-4'>011767456985</motion.p>
            <motion.a whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:-100}} transition={{duration: 1}} className='my-4 border-b'>me@example.com</motion.a>
        </div>
    </div>
}
