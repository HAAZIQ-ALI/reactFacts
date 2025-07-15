import { useState } from 'react'
import Nav from "./nav.jsx"
import reactLogo from "./assets/react.svg";

function App() {
  

  return (
    <>
    <div className="h-screen w-full bg-[#282C35]">
    <Nav/>
     <div> <h1 className="text-start  text-white font-bold text-5xl pt-10 pl-10">Fun facts about <span className="text-[#33c5f2]">React</span></h1></div>
     <div className="pt-10 pl-10">

     <h1 className="text-white text-2xl ">Was released in <span className="font-bold">2013</span></h1> 
     <h1 className="text-white text-2xl mt-2">Was originally created by <span className="font-bold">Jordan Walkie</span> or <span className="font-bold">Mark ZuckerBurger 👽</span> </h1>
     <h1 className="text-white text-2xl mt-2">Has more than 100k stars on <span className="font-bold">GitHub</span></h1>
     <h1 className="text-white text-2xl mt-2">Is maintained by <span className="font-bold">Meta</span></h1>
     <h1 className="text-white text-2xl mt-2">Most influential <span className="font-bold">JS libary</span></h1>
     
     </div>
      
     </div>
     
    
      
     
     </>
  )
}

export default App
