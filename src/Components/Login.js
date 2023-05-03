import React from 'react'
import './Login.css'
import { useContext } from 'react';
import { allContext } from './Context';




const Login = () => {
    const {setIslogedin,setUser,user}  = useContext(allContext);

    const handle=()=>{
        if(user.email==="ramesh" && user.password==="ramesh@123"){
            setIslogedin(true);
          localStorage.setItem("email", user.email)
          localStorage.setItem("password",user.password)
        }
        else{
            alert("Enter Proper Crendential")
        }
    }
  
  return (
    <div className='style'>
      <div className='logo'>
        <img src='https://www.iposters.co.uk/media/catalog/product/0/5/0524BE_3.jpg?store=default&image-type=image' width={250} height={350}/>
      </div>
      <div className='main'>
      <div className='details'>
        <h2>Welcome Back,</h2>
        <h4>Sign in to your account</h4>
        <div className='email'>
            <p>Email</p>
            <input type='text' placeholder="Enter Email" onChange={(e)=>{setUser({
            ...user,
            email:e.target.value
        })}}/>
        </div>
        <div className='password'>
          <p>Password</p>
          <input type='password' placeholder='Enter Password' onChange={(e)=>{setUser({
            ...user,
            password:e.target.value
        })}}/>
           <h5>Forgot Password</h5>
          </div>
         
          <div className='button'>
        <button style={{width:"200px", height:"30px",backgroundColor:"red"}} onClick={handle} >Sign in</button>
       </div>
        <h4>Don't have any account? <span>sign up</span></h4>
      </div>
      </div> 
    </div>
  )
}

export default Login
