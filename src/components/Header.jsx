import React from 'react';
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    
    <header className="bg-[#7E33E0] text-white py-3 m-0 p-0">
      
      <div className="container mx-auto">
        
        <div className="flex justify-between">
        <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <CiMail/>
          <p>mhhasanul@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <IoIosCall/>
          <p>(12345)67890</p>
        </div>
        </div>
        
        
        
        <div className="">
          
          <ul className="flex items-center gap-3">
            <li className="flex items-center gap-2">English<FaAngleDown/></li>
            <li className="flex items-center gap-2">USD<FaAngleDown/></li>
            <li className="flex items-center gap-2">Login<FaRegUser/></li>
            <li className="flex items-center gap-2">Wishlist<CiHeart/></li>
            <li className="flex items-center gap-2"><CiShoppingCart/></li>
          </ul>
          
        </div>
        
        </div>
        
        
      </div>
      
    </header>     
    
      
    
  );
};

export default Header;