import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/Hekto.png"
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="py-5 z-50">
      <div className="container mx-auto">
        
        <div className="flex items-center gap-5 justify-between">
          <Link to='/'><img src={Logo}  alt="Hekto Logo" /></Link>
          <div className="">
          <ul className="flex items-center gap-3">
            <li className="flex items-center gap-2 relative group"><Link to='/'>Home</Link><FaAngleDown/>
            <ul className="absolute top-6 left-0 hidden group-hover:block bg-primary text-white p-3 font-bold rounded z-40 ">
              
                 <li>Pages</li>
            <li><Link to='/product'>Products</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            
            </ul>
            
            </li>
            <li>Pages</li>
            <li><Link to='/product'>Products</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
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