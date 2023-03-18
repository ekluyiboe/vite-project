import React from "react";
import Navbar from "./component/Navbar/Navbar";
import LearnMore from "./component/Navbar/LearnMore";



const App = () => {
  return (
    <section
   
      className="h-screen bg-Hero bg-cover 
      font-[Poppins] md:bg-top bg-center"
    >
     <Navbar/>
    

      <div>
    

      <h1 className="big-text">
          Make <br /> remote work
        </h1>
        <h2 className="fashion">Get your team in sync, no matter your location. <br />
        Streamline processes, create team rituals, and <br /> watch productivity soar.</h2>
       <div>
        <LearnMore/>
       </div>
        
      </div>
      <div className="footer-logo flex flex-row flex space-x-4 ml-369">
      
          <img src="/client-databiz.svg" alt="Vite logo" />
          <img src="/client-audiophile.svg" alt="Vite logo" />
          <img src="/client-meet.svg"  alt="Vite logo" />
          <img src="/client-maker.svg"  alt="Vite logo" />
        </div>
    </section>
  );
};

export default App;