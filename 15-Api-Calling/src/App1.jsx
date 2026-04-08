import React from 'react'


const App1 = () => {
  const getData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    console.log(data);
    
} 
return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
)
}

export default App1
