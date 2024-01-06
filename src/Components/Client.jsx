import React from 'react'
import img1 from '../assets/Clip path group.svg';
import img2 from '../assets/Company logo (1).svg';
import img3 from '../assets/Company logo (2).svg';
import img4 from '../assets/Company logo (3).svg';
import img5 from '../assets/Company logo.svg';
import img6 from '../assets/image 18.png';
import img7 from '../assets/image 20.png';
import img8 from '../assets/wise.svg';
const Client = () => {
    const clientList = [
       img1,img2,img3,img4,img5,img6,img7,img8 
    ]
  return (
    <div className='w-full h-64 mt-16'>
        <div className='w-full h-32 flex flex-row flex-wrap gap-8 justify-center '>
           {
            clientList.map((client)=>(
                <div>
                    <img src={client}/>
                </div>
            ))
           }
        </div>
    </div>
  )
}

export default Client