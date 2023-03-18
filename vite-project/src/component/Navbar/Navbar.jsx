import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import NavLinks from './NavLinks'
import Login from "./Login";

const Navbar = () => {
  return (
    <nav className="bg-white"> 
        <div className='flex items-center font-medium justify-around'>
            <div>
                <h1 className='logo'>snap</h1>
            </div>
            <ul className='links flex  items-center gap-8 text-gray-400  '>
                <li>
                    <Link to="/" className="py-7 px-1 inline-block ">
                       
                    </Link>
                </li>
                
                <NavLinks/>
            </ul>
            <div>
            
                <Button/>
                <Login/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar