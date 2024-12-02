import React from 'react'
import { motion } from "motion/react"

export default function Experiance() {
    return <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity : 1 , y:0}} initial={{opacity:0 , y:-100}} transition={{duration: 1.5}} className='my-20 text-center text-4xl'>Experience</motion.h2>
        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:-100}} transition={{duration: 1.5}}  className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>2023 - Present</p>
                </motion.div>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:100}} transition={{duration: 1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Senior Full Stack Developer - Google inc</h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat voluptatibus omnis voluptates voluptatem. Id nihil, inventore quis fugit dolorum est et deleniti eveniet! Reiciendis corrupti ab quis veritatis assumenda sunt, atque blanditiis quos distinctio deleniti placeat praesentium debitis dolorum ad?</p>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>JavaScript</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>React.JS</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Next.JS</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>mongoDB</span>
                </motion.div>
            </div>
        </div>

        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:-100}} transition={{duration: 1.5}} className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>2022 - 2023</p>
                </motion.div>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:100}} transition={{duration: 1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Front End Developer - Adobe</h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat voluptatibus omnis voluptates voluptatem. Id nihil, inventore quis fugit dolorum est et deleniti eveniet! Reiciendis corrupti ab quis veritatis assumenda sunt, atque blanditiis quos distinctio deleniti placeat praesentium debitis dolorum ad?</p>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>HTML</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>CSS</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Vue.JS</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>mySQL</span>
                </motion.div>
            </div>
        </div>

        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:-100}} transition={{duration: 1.5}} className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>2021 - 2020</p>
                </motion.div>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:100}} transition={{duration: 1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Full Stack Developer - Facebook</h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat voluptatibus omnis voluptates voluptatem. Id nihil, inventore quis fugit dolorum est et deleniti eveniet! Reiciendis corrupti ab quis veritatis assumenda sunt, atque blanditiis quos distinctio deleniti placeat praesentium debitis dolorum ad?</p>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Python</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Sevlte</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Three.JS</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Postgres</span>
                </motion.div>
            </div>
        </div>

        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:-100}} transition={{duration: 1.5}} className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>2020 - 2021</p>
                </motion.div>
                <motion.div whileInView={{opacity : 1 , x:0}} initial={{opacity:0 , x:100}} transition={{duration: 1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Software Engineer</h6>
                    <p className='mb-4 text-neutral-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat voluptatibus omnis voluptates voluptatem. Id nihil, inventore quis fugit dolorum est et deleniti eveniet! Reiciendis corrupti ab quis veritatis assumenda sunt, atque blanditiis quos distinctio deleniti placeat praesentium debitis dolorum ad?</p>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Ruby</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Rails</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>PhP</span>
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Node.JS</span>
                </motion.div>
            </div>
        </div>
    </div>
}
