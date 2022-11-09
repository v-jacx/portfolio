import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: directionLeft ? -200: 200,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity:1, x: 0}}
            className=' border border-gray-500 rounded-full object-cover w-[4.5rem] h-[4.5rem] md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
            src='/js.jpeg'
        /> 
    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-250 ease-in-out group-hover:bg-white h-[4.5rem] w-[4.5rem] md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
    </div>
    </div>
  )
}

export default Skill