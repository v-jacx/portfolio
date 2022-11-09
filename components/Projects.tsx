import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#eabfb9]/50 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {/*projects*/}
        </div>

        <div className='w-full absolute top-[30%] bg-[#eabfb9]/20 left-0 h-[400px] -skew-y-12' />
        </div>
  )
}

export default Projects