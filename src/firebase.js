//import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import { getAuth } from "firebase/auth";


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCfOjTV2pl3-IbMCMh_I0O8iQ5XMwXc7Zw",
  authDomain: "whatsapp-clone-f7e94.firebaseapp.com",
  projectId: "whatsapp-clone-f7e94",
  storageBucket: "whatsapp-clone-f7e94.appspot.com",
  messagingSenderId: "759392690668",
  appId: "1:759392690668:web:a310aa33fbf8ed3fc820c9",
  measurementId: "G-Y23XYM3MYY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
