import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [data,setData]=useState({mail:'',password:'',name:''});
  const [store,setStore]=useState('');
  const [btn,setBtn]=useState(true);
  const handle=(e)=>{
     setData({
      ...data,
      [e.target.name]:e.target.value,
      
     });  
  }
  function submitHandle(e){
    e.preventDefault();
    setStore(data);
    console.log(store);
    
    }
  return (
    <div>
      <form onSubmit={submitHandle}>
        <input 
      type="text" 
      placeholder='Enter name'
      onChange={handle}
      name='name'
      />
      <input 
      type="email" 
      placeholder='Enter mail'
      onChange={handle}
      name='mail'
      />
      <input 
      type={btn ? "text" : "password"}
      placeholder='Password...'
       onChange={handle}
       name='password'
       />
      <button type='Button' onClick={()=>setBtn(!btn)} >{btn ? 'hide' : 'show'}</button>
      <button type='submit'>Submit</button>
     
       {store && (
          <div>
           
            <h3>Submitted Data:</h3>
            <table >
              <thead>
                <tr>
                <th>Name</th>
                <th>Mail</th>
                <th>Password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{store.name}</td>
                  <td>{store.mail}</td>
                  <td>{store.password}</td>
                </tr>
              </tbody>
            </table>
          </div>
    )}
      </form>
    </div>
  )
}

export default App
