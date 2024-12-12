import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from "./login.module.css";
import { useNavigate} from "react-router-dom";

const login = () => {
  
    const[email, setemail] = useState();
    const[password, setpassword] = useState();
    const navigate = useNavigate();
  
    const onsubmit= async(e)=>{
    e.preventDefault()
      try{
        const sendSign=await fetch(`http://localhost:3000/user/login`, {
          method:"POST",
          headers:{
            'content-Type':"application/json"
          },
          body:JSON.stringify({email,password})
        })
        const response=await sendSign.json();
        
        if(sendSign.ok){
          alert("login successfull")
          localStorage.setItem("token", response.token)
          navigate("/Home");
        }else{
          alert("Registeration failed")
        }
  
      }catch (error){
        console.log(error);
  
      }
  }

  return (
    <div className={style.full}>
      <div id="form" className={style.login}>
        <h1 className={style.hello}>Login</h1>
        <div>
            <input type="email" name="email" id="" placeholder='email' onChange={(e)=> setemail(e.target.value)}/>
           <input type="password" name='password'  placeholder='password' onChange={(e)=> setpassword(e.target.value)}/>
           <button onClick={onsubmit} type="submit">Login</button>
        </div>
        <div>
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        </div>
      </div>
    </div>
  )
}

export default login;