import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
        <header className='flex justify-center h-20 bg-green-950 text-gray-50'>
            <div className='min-w-7xl flex justify-between items-center px-5'>

                <div className='text-2xl font-bold'>
                    <Link to={"/"}>Logo</Link>
                </div>

                <nav className='flex gap-15 items-center'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/products"}>Products</Link>
                    <Link to={"/dashboard"}>Dashboard</Link>
                </nav>

                <div className='flex gap-10'>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/register"}>Register</Link>
                </div>
            </div>
        </header>
    )
}

export default Header