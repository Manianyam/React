import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [btn,setBtn]=useState(true);
  const [count ,setCount]=useState({mail:'',password:''});
   const [store ,setStore]=useState(null);
    function change(e){
      setCount({
        ...count,
       [e.target.name]:e.target.value,
      });
    
    };
   function submitHandle(e){
    e.preventDefault();
    setStore(count);
  
  };
 
  

  return (
   <>
   <form onSubmit={submitHandle}>
    <input
     type="email" 
     placeholder='Enter mail'
      onChange={change}
     name='mail'/>
   <input 
     type={btn ? 'password' : 'text' }
     placeholder='password..'
      onChange={change}
     name='password'
     ></input>
  <button type='button' onClick={()=>setBtn(!btn)}>{btn ? 'Show' : 'Hide'} </button>
  <p>{btn ? '':'The password was shown'}</p>
  
  <button  type='submit'>Submitt</button>
        {store && (
          <div>
            <h1>Submitted Email: {store.mail}</h1>
            <h1>Submitted Password: {store.password}</h1>
          </div>
        )}
  </form>
   </>
  );
};

export default App