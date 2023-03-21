import { useEffect } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import Close from "assets/close.svg"

export default function App() {
  const [registerEmail, setEmail] = useState("");
  const [registerPassword, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
      });
  }, [])


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  
  return (
  <dialog class="backdrop-blur-sm max-w-prose p-0 rounded-2xl" id="loginModal">
    <div class="max-w-2xl mx-auto">
      <div class="bg-black shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-80 dark:border-gray-700 m-auto"> 
      <img src={Close} id='closeSvg'class="w-6 h-6 absolute top-2 right-2 bg-white rounded-full hover:bg-blue1 cursor-pointer" />
      <form class="space-y-6" action="#">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
        <div>
          <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
          <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email..." required="" onChange={(event) =>{setLoginEmail(event.target.value);
          }} 
          />
        </div>
        <div>
          <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" onChange={(event) => { 
          setLoginPassword(event.target.value);
          }} 
          />
        </div>
          <div class="flex items-start">
          <div class="flex items-start">
          <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
          </div>
          <div class="text-sm ml-1 mr-2">
            <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
          </div>
          </div>
          <a href="#" class="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Lost Password?</a>
          </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue1 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={login}>Login to your account</button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">Not registered? 
          <a href="#" class="text-blue-700 hover:underline dark:text-blue-500"> Create account</a>
          </div>
      </form>
    </div>
    </div>
  </dialog>
  )
}

