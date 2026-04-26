import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-60px flex flex-row items-center justify-end'>
      <ul className="flex gap-4 p-4 bg-slate-800 text-white">
        <li className="hover:text-blue-400 transition-colors">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-blue-400 transition-colors">
          <a href="/view">View</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
