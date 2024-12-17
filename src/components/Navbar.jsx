import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex w-screen h-[10vh] md:h-[8vh] bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_1px_4px_-1px_rgba(0,0,0,0.06)]'>
    <div className="logo flex items-center  mx-7 ">
      <h1 className='font-bold text-justify' >
      FindMyDate
      </h1>
    </div>
  </nav>
  )
}

export default Navbar
