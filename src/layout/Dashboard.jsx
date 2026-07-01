import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='h-screen flex'>
        {/* Sidebar */}
        <div className='h-screen w-84 flex flex-col justify-between bg-gray-300'>
            <div>
                <div className='h-18 flex justify-center items-center bg-gray-400'>
                    <h2 className='text-2xl font-bold'>Admin dashboard</h2>
                </div>

                <div className='flex flex-col'>
                    <Link to={"/"} className='px-5 py-4 border-b-2 border-gray-400'>Visit Site</Link>
                    <Link to={"/dashboard/overviews"} className='px-5 py-4 border-b-2 border-gray-400'>Overviews</Link>
                    <Link to={"/dashboard/user"} className='px-5 py-4 border-b-2 border-gray-400'>User</Link>
                    <Link className='px-5 py-4 border-b-2 border-gray-400'>Analytics</Link>
                </div>
            </div>

            <div className='flex flex-col'>
                <button className='px-5 py-4 border-t-2 text-xl text-red-400 border-gray-400'>Logout</button>
            </div>
        </div>

        {/* Main content */}
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard