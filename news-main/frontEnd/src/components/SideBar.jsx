import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className='w-1/6 bg-neutral-900 rounded p-2 m-2 '>
      <ul>
        <li className='text-white text-lg font-bold p-2'>Categories</li>
        <li className='text-gray-400  pl-5 py-2 hover:text-white cursor-pointer font-semibold text-lg'><Link to='/'>Home</Link></li>
        <li className='text-gray-400  pl-5 py-2 hover:text-white cursor-pointer font-semibold text-lg'><Link to='/business'>Business</Link></li>
        <li className='text-gray-400 pl-5 py-2 hover:text-white cursor-pointer font-semibold text-lg'><Link to='/entertainment'>Entertainment</Link></li>
        <li className='text-gray-400  pl-5 py-2 hover:text-white cursor-pointer font-semibold text-lg'><Link to='health'>Health</Link></li>
        <li className='text-gray-400  pl-5 py-2 hover:text-white cursor-pointer font-semibold text-lg'><Link to='science'>Science</Link></li>
        <li className='text-gray-400  pl-5 py-2 hover:text-white cursor-pointer font-semibold text-lg'><Link to='sports'>Sports</Link></li>
        <li className='text-gray-400  pl-5 py-2 hover:text-white cursor-pointer font-semibold text-lg'><Link to='technology'>Technology</Link></li>
      </ul>
    </div>
  )
}

export default SideBar