
import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#EEEFFB] mt-10">
      <div className="container mx-auto">
        
        <div className=" flex pt-8 pb-8">
          
          <div className="">
            <h1 className="font-josef font-bold text-[38px] pb-5">Hekto</h1>
            <input className="py-1.5 px-8 font-lato outline-none" placeholder="Enter your Email Address" type="text" />
            <button className="bg-[#FB2E86] px-5 py-1.5 font-lato text-white text-[16px]" type="submit">Sign Up</button>
            <h4 className="pt-4">Contact Info</h4>
            <h4>17 Princess Road, London, Greater London NW1 8JR, UK</h4>
          </div>
          <div className="">
            <h1 className="pb-8">Categories</h1>
            <ul className="">
              <li className="">Laptops & Computers</li>
              <li className="">Cameras & Photography</li>
              <li className="">Smart Phones & Tablets</li>
              <li className="">Video Games & Consoles</li>
              <li className="">Waterproof Headphones</li>
            </ul>
          </div>
          <div className="">
            <h1 className=" pb-8">Customer Care</h1>
            <ul className="">
              <li className="">My Account</li>
              <li className="">Discount</li>
              <li className="">Returns</li>
              <li className="">Orders History</li>
              <li className="">Order Tracking</li>
            </ul>
          </div>
          <div className="">
            <h1 className="pb-8">Pages
            </h1>
            <ul className="">
              <li className="">Blog</li>
              <li className="">Browse the Shop</li>
              <li className="">Category</li>
              <li className="">Pre-Built Pages</li>
              <li className="">Visual Composer Elements</li>
              <li className="">WooCommerce Pages</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-[#E7E4F8] flex justify-between pt-4 justify-center items-center">
         
          <div className=" ">
             <h2 className="">©ami - All Rights Reserved</h2>
          </div>
          <div className="flex gap-2">
            <BsFacebook />
            <FaInstagramSquare />
            <FaXTwitter />
          </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer