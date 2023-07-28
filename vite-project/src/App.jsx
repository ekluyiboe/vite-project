import React, { createContext } from "react";
import Navbar from "./component/Navbar/Navbar";
import LearnMore from "./component/Navbar/LearnMore";
import Languageoption from '../src/component/Navbar/language-dropdown'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



const App = () => {
  const {t} = useTranslation();
  const handleClick=(e)=>{
    i18next.changeLanguage(e.target.value)
  }
  return (
    
    <section
   
      className="h-screen bg-Hero bg-cover  
      font-[Poppins] md:bg-top bg-center dark:text-gray-100 dark:bg-slate-900 duration-100"
    >
   
     <Navbar/>
     
      <div>
      <h1 className="big-text">
      {t('Make')} <br />{t('remote work')}
        </h1>
        <h2 className="fashion">{t('Get your team in sync')}, {t('no matter your location')}. <br />
        {t('Streamline processes')}, {t('create team rituals')}, {t('and')} <br /> {t('watch productivity soar')}.</h2>
       <div>
        <LearnMore/>
       </div>
        
      </div>
      <div className="footer-logo flex flex-row flex space-x-4 ml-369">
      
          <img  src="/client-databiz.svg" alt="Vite logo" />
          <img  src="/client-audiophile.svg" alt="Vite logo" />
          <img  src="/client-meet.svg"  alt="Vite logo" />
          <img  src="/client-maker.svg"  alt="Vite logo" />
        </div>
    </section>
   
  );
};


export default App;