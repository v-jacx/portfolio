import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#eabfb9]/50 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-3xl font-semibold text-center'>
                I'd love to hear from you.{" "}
                <span className='decoration-[#eabfb9]/50 underline'>Lets Talk!</span>
            </h4>
        </div>

    </div>
  )
}

export default Contact