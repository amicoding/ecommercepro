import React from 'react'
import Sofa from "../assets/sofa.png"
import Bell from "../assets/bell.png"
const Hero = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        
        <div className="flex justify-between items-center">
          
          <div className="">
            <h4>Best Furniture For Your Castle....</h4>
            <h1 className="font-bold font-josef text-[56px]">New Furniture Collection
            Trends in 2020</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
          in phasellus non in justo.</p>
             <button type="submit">Shop Now</button>
          </div>
          
          <div>
            <img src={Sofa} alt="" />
          </div>
          
        </div>
        
      </div>
    </section>
  )
}

export default Hero