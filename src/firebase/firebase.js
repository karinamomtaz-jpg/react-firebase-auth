
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRfXC_VUa9vjjj5MJVcaJC_v1r3TY7fko",
  authDomain: "react-firebase-auth-ab89c.firebaseapp.com",
  projectId: "react-firebase-auth-ab89c",
  storageBucket: "react-firebase-auth-ab89c.firebasestorage.app",
  messagingSenderId: "359060601722",
  appId: "1:359060601722:web:ddb35345715a46756174c3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
