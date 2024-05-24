import React from 'react'
import logo from "../../assets/cygnos-logo.png"

const Navbar = () => {
  return (
    <div className='md:mx-16'>
       <div style={{background:"#f8faf5"}} className='w-full h-16 rounded-t-2xl flex justify-between items-center  '>


     <div>

      <img  src={logo} alt="" className='w-40 mt-8  '  />
     </div>

     <div>
     <button class="custom-btn btn-13 mr-10 ">Read More</button>
     </div>

     
          

       </div>
       <div className="w-full h-10 bg-gradient-to-r from-teal-700 to-teal-300 rounded-br-full  ">
         <ul className='flex items-center justify-start gap-10 relative p-2 pl-8 text-white cursor-pointer '>
            <li>About</li>
            <li>Services</li>
            <li>Test</li>
            <li>Others</li>
            </ul>              


       </div>
    </div>
  )
}

export default Navbar
