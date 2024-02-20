import React, {useState, useRef} from 'react';
import Header from './Header';
import {validateData} from '../utils/validate';

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUp = () =>{
    setShowSignUp(!showSignUp);
  }

  const [errorMsg, setErrorMsg] = useState("");

  const email = useRef("");
  const password = useRef("");

  const handleValidateData = () => {
    const status = validateData(email.current.value, password.current.value);
    setErrorMsg(status);
  } 



  return (
    <div className='relative'>
        <Header />
        <div>
            <img 
            className='absolute'
            src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="backgroundImage"/>
        <div className='absolute top-36 left-[38%] w-3/12 h-[600px] pt-[60px] pr-[40px] pb-[40px] pl-[40px] bg-black opacity-90 rounded-md'>
            
            <h1 className='text-white font-semibold font-sans text-3xl mb-4'>
              {showSignUp?"Sign Up":"Sign In"}
            </h1>

            <form action="" onSubmit={(e)=>e.preventDefault()}>
            {(showSignUp) && <input type="text" placeholder='Your Name' className=' text-lg p-3 my-3 w-full rounded-sm bg-gray-600 text-white outline-none'/>}
            <input ref={email} type="text" placeholder='Email' className=' text-lg p-3 my-3 w-full rounded-sm bg-gray-600 text-white outline-none'/>
            <input ref={password} type="password" placeholder='Password' className='text-lg p-3 my-3  w-full rounded-sm bg-gray-600 text-white outline-none'/>
            <h1 className='text-lg font-semibold text-red-600'>{errorMsg}</h1>
            <button onClick={handleValidateData} className='p-3 my-7 bg-red-700 opacity-100 w-full rounded-sm text-white font-semibold text-lg'>
            {showSignUp?"Get Started":"Sign In"}
            </button>
            </form>
            <div>
              <p className='text-white cursor-pointer' onClick={handleSignUp}>
              {showSignUp?"Go to Sign In.":"New to Netflix? Sign up now."}
              </p>
            </div>
        </div> 
        </div>
    </div>
  )
}


export default Login;




 