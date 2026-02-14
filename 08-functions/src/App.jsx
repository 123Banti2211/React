import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('Button click');
  }
  function mouseenter(){
    console.log('Mouse enter');
  }

  function inputchanging(val){
    console.log("user is tyeping");
    console.log(val);
    
    
  }
  return (
    <div>
      <button onMouseEnter={mouseenter} onClick={btnClicked}>Click</button>
      <div>
        <input onClick={()=>{
          console.log('input click');
          
        }} onChange={function(elem){
          // console.log(elem.target.value);
          inputchanging(elem.target.value)
          
        }} type="text" placeholder='Enter name' />
      </div>
      <div onMouseMove={(elem)=>{
        console.log("hi");
        console.log(elem.clientX);
        
        
      }} className='box'></div>
      
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App