import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{duration: 1.2}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            className='w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src='./ga-logo.png'
            alt='General Assembly logo'
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light xl:text-3xl'>Software Engineer Fellow</h4>
            <p className='font-bold text-1xl mt-1 xl:text-2xl'>General Assembly</p>
            <div className ='flex space-x-2 my-2'>
              <img className='h-10 w-10 rounded-full' src='/js.jpeg'/>
            </div>
            <p className='uppercase py-5 text-gray-500'>June 2022 - September 2022</p>
            <ul className='list-disc space-y-4 ml-5 text-base xl:text-lg'>
                <li> Summary </li>
                <li> Summary </li>
                <li> Summary </li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard