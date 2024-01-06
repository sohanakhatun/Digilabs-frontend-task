import React from 'react'

const Statistics = () => {
    const stats =[
        {
         first:"2 Million",
         second:"customers",
         third:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        },
        {
         first:"1K",
         second:"Downloads",
         third:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        },
        {
         first:"$73 Million",
         second:"Transaction",
         third:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        },
        {
         first:"2.0",
         second:"Latest Version",
         third:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        },
    ]
  return (
    <div className=' flex flex-col gap-8 lg:gap-4 lg:flex-row p-8 lg:mt-32 mt-64'>
    {
     stats.map((item)=>(
         <div className='flex flex-col gap-2 font-Inter font-medium text-center'>
             <h1 className='text-[#582066]  text-3xl'>{item.first}</h1>
             <p>{item.second}</p>
             <p className='text-[#5A6475]'>{item.third}</p>
         </div>
     ))
    }
 </div>
  )
}

export default Statistics