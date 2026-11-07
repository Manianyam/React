import React, { useState } from 'react'

const App = () => {
  const [mail,setMail]=useState('');
  const [psw,setPsw]=useState('');
  const [store,setStore]=useState('');
  const [btn,setBtn]=useState(true);
  function submitHandle(e){
    e.preventDefault();
     setStore(`${mail}+${psw}`);
     console.log(btn);
  }
  return (
    <div>
      <from onSubmit={submitHandle}>
      <input 
      type="mail" 
      placeholder='Enter mail'
      onChange={(e)=>setMail(e.target.value)}
      />
      <input 
      type={btn ? "text" : "password"}
      placeholder='Password...'
       onChange={(e)=>setPsw(e.target.value)}
       />
      <button onClick={()=>setBtn(!btn)} >{btn ? 'hide' : 'show'}</button>
      <button type='submit'>Submit</button>
      <p>{mail }</p>
      <p>{psw}</p>
      <p>{store}</p>
      </from>
    </div>
  )
}

export default App
