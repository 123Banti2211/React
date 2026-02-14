import React from 'react'

const App = () => {
  let a=20

  function changeA(){
    console.log(a);
    a++
    console.log(a);
  }
  return (
    <div>
      <h1>Value of a is{a}</h1>
      <button onClick={changeA}>click</button>
    </div>
  )
}

export default App
