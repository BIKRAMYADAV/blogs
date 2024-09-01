import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='w-full flex justify-end p-3 pr-16 border-b-2'>
        <Link to="/" className='mr-4'>Blogs</Link>
        <Link to="/about" className=''>About</Link>
    </div>
    </>
  )
}

export default Navbar