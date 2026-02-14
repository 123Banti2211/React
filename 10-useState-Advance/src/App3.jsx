import React, { useState } from 'react'

const App3 = () => {

  const [num, setNum] = useState(10)

  const btnClicked = () => {
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App3