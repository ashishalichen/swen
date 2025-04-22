import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'


function Body() {

  return (
    <div className="bg-black text-white  flex flex-row w-full">
      <SideBar />
      <Outlet />

    </div>
  )
}

export default Body