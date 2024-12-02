import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
export default function Navbar() {
    return <nav className='mb-20 flex justify-between items-center py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <span className='text-3xl text-white'>Ms</span>
        </div>
        <div className='m-8 justify-center items-center flex gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
            <FaSquareXTwitter/>
        </div>
    </nav>
}
