import React from 'react'
import aboutAmage from '../assets/about.jpg'
import { motion } from "motion/react"


export default function About() {
    return <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'> Me</span></h1>
        <div className='flex flex-wrap'>
            <motion.div
            whileInView={{opacity:1 , x:0}}
            initial={{opacity: 0 , x:-100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src={aboutAmage} alt="AboutImage" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1 , x:0}}
            initial={{opacity: 0 , x:100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>
                        FRONT END DEVELOPER WITH A STRONG FOUNDATION IN REACT.JS, 
                        HTML, CSS, AND JAVASCRIPT. PROVEN ABILITY TO DESIGN AND 
                        IMPLEMENT ENGAGING AND INTERACTIVE WEB APPLICATIONS. 
                        EXPERIENCED IN WORKING ON LARGE-SCALE PROJECTS SUCH AS THE 
                        AMAZON E-COMMERCE PROJECT, DEMONSTRATING PROFICIENCY IN 
                        SOLVING COMPLEX CODING CHALLENGES AND IMPROVING USER 
                        EXPERIENCE. LOOKING TO LEVERAGE MY TECHNICAL SKILLS AND 
                        CREATIVE PROBLEM-SOLVING ABILITIES IN A COLLABORATIVE TEAM 
                        ENVIRONMENT TO CONTRIBUTE TO IMPACTFUL WEB SOLUTIONS.
                        </p>
                    </div>
                </motion.div>
        </div>
    </div>
}
