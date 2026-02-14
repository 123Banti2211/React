import React, { useState } from 'react'

const App1 = () => {
    const[num,setNum]=useState({user:'Sarthak',age:22})
    const btnclicked= ()=>{
        const newNum = {...num}
        newNum.user = 'Aman'
        setNum(newNum)
    }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnclicked}>Click</button>
    </div>
  )
}

export default App1
