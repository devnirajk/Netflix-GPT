import React from 'react';
import Header from './Header';

const Login = () => {
  return (
    <div>
        <Header />
        <div>
            <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="backgroundImage"/>
            <form action="" >
        <input type="text" placeholder='Email' className='p-2 m-2'/>
        <input type="password" placeholder='Password' className='p-2 m-2'/>
        <button className=''>Sign In</button>
      </form> 
        </div>
     
    </div>
  )
}


export default Login;




 