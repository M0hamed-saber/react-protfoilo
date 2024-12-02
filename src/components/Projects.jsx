import React from 'react'
import img1 from '../assets/project-1.jpg'
import img2 from '../assets/project-2.jpg'
import img3 from '../assets/project-3.jpg'
import img4 from '../assets/project-4.jpg'
import { motion } from "motion/react"

export default function Projects() {
    return <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity : 1 , y:0}} initial={{opacity:0 , y:-100}} transition={{duration: 1.5}} className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:-100}} transition={{duration: 0.5}} className='w-full lg:w-1/4'>
                    <img src={img1} alt="Project-1" width={150} height={150} className='mb-6 rounded' />
                </motion.div>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:100}} transition={{duration: 1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>E-Commerce Website</h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora ipsa quidem ullam doloremque earum officia.</p>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>HTML</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>CSS</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>React</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>NodeJS</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>NodeJS</span>
                </motion.div>
            </div>
        </div>

        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:-100}} transition={{duration: 0.5}} className='w-full lg:w-1/4'>
                    <img src={img2} alt="Project-1" width={150} height={150} className='mb-6 rounded' />
                </motion.div>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:100}} transition={{duration: 1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>E-Commerce Website</h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora ipsa quidem ullam doloremque earum officia.</p>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>JavaScript</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>React.JS</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Next.JS</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>mongoDB</span>
                </motion.div>
            </div>
        </div>

        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:-100}} transition={{duration: 0.5}} className='w-full lg:w-1/4'>
                    <img src={img3} alt="Project-1" width={150} height={150} className='mb-6 rounded' />
                </motion.div>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:100}} transition={{duration: 1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>E-Commerce Website</h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora ipsa quidem ullam doloremque earum officia.</p>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>JavaScript</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>React.JS</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Next.JS</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>mongoDB</span>
                </motion.div>
            </div>
        </div>

        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:-100}} transition={{duration: 0.5}} className='w-full lg:w-1/4'>
                    <img src={img4} alt="Project-1" width={150} height={150} className='mb-6 rounded' />
                </motion.div>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:100}} transition={{duration: 1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>E-Commerce Website</h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora ipsa quidem ullam doloremque earum officia.</p>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>JavaScript</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>React.JS</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Next.JS</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>mongoDB</span>
                </motion.div>
            </div>
        </div>
    </div>
}
