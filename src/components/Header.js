import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignout = () =>{
    signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/");
    }).catch((error) => {
    // An error happened.
    });
  }

  return (
    <div className="absolute z-50 w-[100%] px-8 py-2 bg-opacity-30 bg-black shadow-lg rounded-md flex justify-between">
      <img 
      className="w-44"
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="logo"/>
      {
        (user)&&
        <div className="flex px-1 py-2">
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
