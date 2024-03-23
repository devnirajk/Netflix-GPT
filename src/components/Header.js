import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import {auth} from '../utils/firebase';
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { toogleNetflixGPT } from '../utils/netflixGPT';
 
const Header = () => {
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.netflixGPT.useNetflixGPT);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User signed in
        const { email, displayName } = user;
        dispatch(addUser({ email, displayName }));
        navigate("/browse");
      } else {
        // User signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  
    return () => unsubscribe(); // Pass unsubscribe to the cleanup function
  }, []); // Empty dependency array because this effect should run only once
  

  const handleSignout = () =>{
    signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
  }

  const handleToggleNetflixGPT = ()=>{
    dispatch(toogleNetflixGPT());
  }

  return (
    <div className="absolute z-50 w-[100%] px-4 py-2 bg-gradient-to-b from-black flex justify-between">
      <img 
      className="w-44"
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="logo"/>
      {
        (user)&&
        <div className="flex px-1 py-2">
          <button 
          onClick={handleToggleNetflixGPT}
          className="text-white bg-teal-700 rounded-md px-2 font-medium"> {gpt ? "Close Netflix GPT" : "Open Netlfix GPT"} </button>
          <img
          alt="user_pic"
          className="w-12 mx-3"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" />
          <button onClick={handleSignout} className='text-white bg-red-600 rounded-md px-2 font-medium'>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header
