
import React, {useContext} from 'react'
import productImg from '../assets/product.png'
import {apiData} from "./ContextApi.jsx"



const Featured = () => {
  
  const data = useContext(apiData)
   console.log(data);
 
  return (
    <section>
      <div className="">
        <div className="container mx-auto">
          
          <div className="">
            <h2 className="font-bold font-josef text-[46px] text-[#1A0B5B] text-center"> Featured Products </h2>
              </div>
              
          <div className="flex flex-wrap justify-between">
            
            {data.map((items)=>(
            
             
             <div className="shadow-lg w-[23%] mb-5">
              <div className="bg-[#F6F7FB] flex justify-center pt-16 pb-8">
                <img src={items.thumbnail} alt="" />
              </div>
              
              <div className="text-center py-5">
                
                <h2 className="font-lato font-bold text-[18px] text-[#FB2E86]">{items.title}</h2>
                
                <h5 className="font-josef font-normal text-[14px] text-[#151875] py-2">Code-88776hg</h5>
                
                <p className="font-josef font-normal text-[14px] text-[#151875] py-2">{items.price}</p>
                
              </div>
              
            </div>
            
            ))}
           
          
            
            
          </div>
          
        </div>
      </div>
      
    </section>
  )
}

export default Featured