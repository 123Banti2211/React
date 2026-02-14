import React from 'react'
import {MoveRight} from 'lucide-react'
const RightCardContent = (props) => {

    console.log(props);
    console.log(props.tag);
    
    
    
    return (
        
            <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
                <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center textxl font-bold'>{props.id+1}</h2>
                <div>
                    <p className='text-xl text-shadow-2xs leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, a recusandae. Obcaecati repellat laborum quas!</p>
                    <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button  className=' text-white font-semibold px-3 py-2 rounded-full'> <MoveRight /></button>
                </div>
                </div>
            </div>
           
        
    )
}

export default RightCardContent