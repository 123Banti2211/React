import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num,setNum] = useState(0)
  const [username,setUsername]=useState('banti')
  const [users,setUsers]=useState([10,20,30])

  function changeNum(){
    console.log('hello');
    setNum(30)
    setUsername('hi')
    setUsers([99,88,77])
    
  }
  return (
    <div>
      <h1>Value of num is {num} <br />
        value of user is {username} <br /> value of array is {users}
      </h1>
      <button  onClick={changeNum}>click</button>
    </div>
  )
}

export default App
