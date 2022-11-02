import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#eabfb9]/50 text-2xl'>
        Experience
      </h3>

      <div>
        <ExperienceCard/>
      </div>
    </motion.div>


  )
}

export default Experience