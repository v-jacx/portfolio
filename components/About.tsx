import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#eabfb9]/50 text-2xl'>
            About
        </h3>

        <motion.img
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{ once: true}}
            src='/IMG_3517.jpg'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-3xl font-semibold'>
                A <span className='underline decoration-[#eabfb9]/50 '>little</span> about my <span className='underline decoration-[#eabfb9]/50'>journey</span>
            </h4>
            <p className='text-base'>
                I'm Jacquelin Velasquez, but you can call me Jacquie.  My love for coding started in High School, when a recruiter came in to my pre-calculus class to give a presentation about working in STEM. I had never heard of computer science or coding.  Coming from a low income family where our parents didn't know anything about technology, meant our understanding of it was also minimal. After high school, I pursued my dream of becoming a programmer, but being a first generation college student, I felt lost and had no guidance. I tried working full-time and being a full-time student but slowly fell off. I joined the U.S. Navy in 2019, got married in 2020, and moved to North Carolina. I went back to college as my love for coding never disappeared. I was on the path to my associates degree although the pace was not what I wanted. I give my all to any job that I hold and thus took less courses than I wish I did. Shortly after having my first born baby, I decided to join a bootcamp and go all in. There was no going back. No quiting. And here I am a General Assembly bootcamp graduate with a love and passion for coding searching for her next opportunity to create great things, solve world problems and become part of an amazing community.
            </p>
        </div>
    </div>
  )
}

export default About