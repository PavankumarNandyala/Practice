import React,{useState} from 'react'
import './Login.css';
function Login() {
    const [RfirstName,setFirstName]=useState("");
   
    
    
    const updateField=(e)=>{
        

        }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
       
    }
   
  return (
    <div className='login-container'>
     <h2 className="form-title">Log in with</h2>
     <div className='social-login'>
        <button className='social-button'>
            <img src='https://as2.ftcdn.net/v2/jpg/03/91/79/25/1000_F_391792593_BYfEk8FhvfNvXC5ERCw166qRFb8mYWya.jpg' alt='Google' className='social-icon' width={30} height={30}/>
            Google
        </button>
        <button className='social-button'>
            <img src='https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-768x432.png' alt='Google' className='social-icon' width={30} height={30}/>
            Apple
        </button>
        {/* <button className='social-button'>
            <img src='' alt='Google' className='social-icon' width={30} height={30}/>
            Google
        </button> */}
     </div>
     <p className='separator'><span>or</span></p>

     <form action="" className='login-form'>
        <div className='input-wrapper'>
            <input type='email' onClick={updateField} placeholder='Please Enter Email address' className='input-field' required/>
            <i className="material-symbols-outlined">mail</i>
        </div>
        <div className='input-wrapper'>
            <input type='password' onClick={updateField} placeholder='Password' className='input-field' required/>
            <i className="material-symbols-outlined">lock</i>
        </div>
        <a href='#' className='forgot-pass-link'>Forgot Password?</a>
 
    <button className='login-button'>Log In</button>

 
     </form>
     <p className='signup-text'>Don&apos;t have an account? <a href='#'>Signup now</a></p>


        
    </div>
  )
}

export default Login
