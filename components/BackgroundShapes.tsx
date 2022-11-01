import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

const BackgroundShapes = (props: Props) => {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', "20%", "50%", "80%", "20%"]
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center">
      <div className="absolute border border-[#eabfb9] rounded-full h-[250px] w-[250px] mt-52 animate-ping"/>
      <div className=" absolute border border-[#eabfb9] h-[300px] w-[300px] mt-52 rotate-90 animate-spin" />
      <div className=" absolute border border-[#eabfb9] rounded-full h-[650px] w-[650px] mt-52 animate-pulse"/>
      <div className=" absolute border border-[#eabfb9] h-[500px] w-[500px] mt-52 rotate-45 animate-pulse " />
    </motion.div>
  )
}

export default BackgroundShapes