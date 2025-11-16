import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-6 py-6'>
        <h3 className='bg-black rounded-2xl px-4 uppercase text-white py-1'>target audience</h3>
        <button className='uppercase bg-gray-400 rounded-3xl text-sm px-7'>digital banking platform</button>
    </div>
  )
}

export default Navbar