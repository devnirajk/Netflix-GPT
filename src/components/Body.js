import { onAuthStateChanged } from "firebase/auth";
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {auth} from '../utils/firebase';
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
  if (user) {
    //user signed in
    const {email, displayName} = user;
    dispatch(addUser({email, displayName}));
  } else {
    //user signed out
    dispatch(removeUser());
  }
  });
  });

  const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
  ]);

  return (
    <div>
      <RouterProvider router = {appRouter} />
    </div>
  )
}

export default Body
