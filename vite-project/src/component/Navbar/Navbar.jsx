import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import NavLinks from './NavLinks'
import Login from "./Login";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white"> 
        <div className='flex items-center font-medium justify-around'>
            <div>
                <h1 className='logo'>snap</h1>
            </div>
            
        
            <ul className='links md:flex hidden uppercase  items-center gap-8 text-gray-400  '>
                <li>
                   
                    <Link to="/" className=" about  hover:text-stone-900 py-7 px-1 inline-block ">
                    About
                    </Link>

                    <Link to="/" className=" carrers  hover:text-stone-900 py-7 px-1 inline-block ">
                    Careers
                    </Link>
                </li>
                
                <NavLinks/>
            </ul>
            <div className="md:block hidden">
            
                <Button/>
                <Login/>
            </div>
            {/* Mobile nav */}
            <div className=" hamburger flex items-center font-medium justify-around">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
          </div>
          </div>
        <ul
          className={`
          md:hidden bg-gray-50 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
          duration-500 ${open ? "left-10" : "left-[-14%]"}
        `}
        >
         
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Careers
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
          <Login/>
            <Button />

          </div>
  </ul>
        </div>
    </nav>
  );
  
};


export default Navbar;