import firebase from "firebase/app";
import  'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyBCD7dUDnVDSXOgfZle_JAzYUTKGj078jU",
    authDomain: "avatar-copa.firebaseapp.com",
    projectId: "avatar-copa",
    storageBucket: "avatar-copa.appspot.com",
    messagingSenderId: "727860954969",
    appId: "1:727860954969:web:1f7d1b591f4db67b4b6e48"
  }

const fb=firebase.initializeApp(firebaseConfig);
export const db= fb.firestore();