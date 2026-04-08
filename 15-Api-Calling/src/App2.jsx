import React from 'react'
import axios from 'axios'


const App2 = () => {
  const getData = async () =>{
    // const{data}= await axios.get('https://jsonplaceholder.typicode.com/todos')
    const {data} = await fetch('https://jsonplaceholder.typicode.com/todos')
    console.log(data);
    
    
} 
return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
)
}

export default App2
