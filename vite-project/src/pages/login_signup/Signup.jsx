import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import sign from "./signup.module.css";

const Signup = () => {
  const[name, setname] = useState();
  const[email, setemail] = useState();
  const[password, setpassword] = useState();

  const onsubmit= async(e)=>{
  e.preventDefault()
    try{
      const sendSign=await fetch(`http://localhost:3000/user/signup`, {
        method:"POST",
        headers:{
          'content-Type':"application/json"
        },
        body:JSON.stringify({name,email,password})
      })
      const response=await sendSign.json();
      if(sendSign.ok){
        alert("Registeration successfull")
      }else{
        alert("Registeration failed")
      }

    }catch (error){
      console.log(error);

    }
}
  return (
    <div className={sign.full} >
      <div>
        <h1 className={sign.hello}>Signup</h1>
        <div>
          <input type="name" name='name' placeholder='name' onChange={(e)=> setname(e.target.value)}/>
            <input type="email" name='email' placeholder='email' onChange={(e)=> setemail(e.target.value)}/>
            <input type="password" name='password' placeholder='password' onChange={(e)=> setpassword(e.target.value)}/>
        </div>
        <div>
            <button onClick={onsubmit} type='submit'>Submit</button>
        </div>
        <div>
        <p>Already a member?<Link to='/'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup;
