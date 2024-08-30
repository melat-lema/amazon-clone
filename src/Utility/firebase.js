import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASSOWcpKyL98U1EamB4a6A-v3DEXCSh1I",
  authDomain: "clone-27e76.firebaseapp.com",
  projectId: "clone-27e76",
  storageBucket: "clone-27e76.appspot.com",
  messagingSenderId: "583635814120",
  appId: "1:583635814120:web:42e4137d36798142b6ab5d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db= app.firestore()