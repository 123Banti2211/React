import React from 'react'
import {MoveUpRight} from 'lucide-react'
const Arrow = () => {
  return (
    <div>
      <div className='text-8xl w-32 h-32 strokeWidth={3} p-7'>
        <i><MoveUpRight size={50} strokeWidth={3} /></i>
      </div>
    </div>
  )
}

export default Arrow
