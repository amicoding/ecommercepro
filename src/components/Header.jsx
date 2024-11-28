import React from 'react';
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";

const Header = () => {
  return (
    
    <header className="">
      
      <div className="container mx-auto bg-blue-200">
        
        <div className="flex items-center gap-2">
          <CiMail/>
          <p>mhhasanul@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <IoIosCall/>
          <p>(12345)67890</p>
        </div>
        
        
        
        
        <div className="">
          
        </div>
        
        
        
        
      </div>
      
    </header>  
    
      
    
  );
};

export default Header;