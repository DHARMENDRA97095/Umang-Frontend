"use Client"

import {  useState } from "react"
import { Loader } from "lucide-react"

function ActionButton({style, text, icon , handler}) {
  const [loading,setLoading] = useState(false)
  const handleClickEvent =async ()=>{
   
      setLoading(true);
      handler(setLoading);
      
    
  }
  return (
    <button 
        className={`flex gap-2 p-1 rounded text-white ${loading?"bg-gray-400":style} justify-center items-center`}
        onClick={handleClickEvent}
    >
    {loading?<Loader/>:icon}
    {loading?"":text}
  </button>
  )
}

export default ActionButton
