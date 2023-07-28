import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import NavLinks from './NavLinks'
import Login from "./Login";
import Languageoption from './language-dropdown'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



const Navbar = () => {
  const {t} = useTranslation();
  const handleClick=(e)=>{
    i18next.changeLanguage(e.target.value)
  }
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const element = document.documentElement
  const options =[
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    
  ]; 

  useEffect(()=>{
    switch (theme) {
      case "dark":
        element.classList.add("dark")

        break;
      case "light":
        element.classList.remove("dark")
        break
    default:
      break;
    }
  },[theme]);
  return (
    <nav className="bg-white"> 
        <div className='flex items-center font-medium justify-around'>
            <div>
                <h1 className='logo'>snap</h1>
            </div>
            
        
            <ul className='links md:flex hidden uppercase  items-center gap-8 text-gray-400  '>
                <li>
               
                    <Link to="/" className=" about  hover:text-stone-900 py-7 px-1 inline-block ">
                    {t('About')}
                    </Link>

                    <Link to="/" className=" carrers  hover:text-stone-900 py-7 px-1 inline-block ">
                    {t('Carrers')}
                    </Link>
                </li>
                <Languageoption onChange={(e)=> handleClick(e)}/>

                <NavLinks/>
                <div className="fixed top-5 right-10 duration-100 dark:bg-slate-700 bg-gray-100 rounded">
                  {
                    options?.map(opt=>(
                      <button key={opt.text} onClick={() => setTheme(opt.text)} className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-sky-600"}`}>
                      <ion-icon name={opt.icon}></ion-icon>
                      </button>
                    ))
                  }
                 
                 </div>
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