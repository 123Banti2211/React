import React, { useState } from 'react'


const App2 = () => {

    
    const [num,setnum] = useState(0)
    function IncreaseNum(){
        setnum(num+1)
        console.log('Increasing');      
    }
    function DecreaseNum(){
        setnum(num-1)
        console.log('Decreasing');
    }
    function JumpBy5()
    {
        setnum(num+5)
    }

  return (

    <div>
        <h1>{num}</h1>
      <button onClick={IncreaseNum}>Increase</button>
      <button onClick={DecreaseNum}>Decrease</button>
      <button onClick={JumpBy5}>Jump by 5</button>
    </div>
  )
  
}

export default App2
