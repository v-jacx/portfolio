import React from 'react'
import Image from 'next/image'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundShapes from './BackgroundShapes'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
        "Hi! Jacquelin Velasquez here 👋🏽",
        "Girl-in-love-with-coffee.tsx",
        "<ButLovesCodingCoolThingsMore />",
    ],
    loop: true,
    delaySpeed: 2000,

  });
  
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundShapes />
        <Image
        className="relative rounded-full mx-auto  object-cover rotate-45"
        src='/IMG_1318.jpg' alt='Picture of Jacquelin Velasquez'
        width= {125}
        height={125}/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px]'>
                Software Engineer
            </h2>

            <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor="#a26d5d" />
            </h1> 
            <div className='pt-4'>
                <Link href='#about'>
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className="heroButton">Projects</button>
                </Link>
                
            </div> 
        </div>

    </div>
  )
}

export default Hero;