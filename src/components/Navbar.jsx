import React from 'react';
import Logo from "../assets/Hekto.png"
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="py-5">
      <div className="container mx-auto">
        
        <div className="flex items-center gap-5 justify-between">
         <img src={Logo} alt="" />
          <div className="">
          <ul className="flex items-center gap-3">
            <li className="flex items-center gap-2 relative group">Home<FaAngleDown/>
            <ul className="absolute top-6 left-0 hidden group-hover:block">
              <li>page1</li>
              <li>page2</li>
              <li>page3</li>
              <li>page4</li>
            </ul>
            
            </li>
            <li>Pages</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
        
        <div className="flex items-center">
          <input className="border-2 outline-none w-60 h-8 pl-2 rounded" type="text" />
          <button className="h-8 w-10 bg-[#FB2E86] flex justify-center items-center text-2xl font-bold" type="submit"><CiSearch className="text-white"/></button>
        </div>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;