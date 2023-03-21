import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAq3h9p2iqw2uNZg1YSWRpBQYiBEXJg9NI",
  authDomain: "learning-90c89.firebaseapp.com",
  projectId: "learning-90c89",
  storageBucket: "learning-90c89.appspot.com",
  messagingSenderId: "1015522927439",
  appId: "1:1015522927439:web:80017419567b5485699b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


