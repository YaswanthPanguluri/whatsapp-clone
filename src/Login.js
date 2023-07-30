import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
function Login() {
    const sigIn = ()=>{
        auth
        .signInWithPopup(provider)
        .then((result) => console.log(result))
        .catch((error)=>alert(error.message));
    };
  return (
    <div className="login">
        <div className="login__container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt=""/>
        
        <div className="login__text">
            <h1>Sigin to whatsApp</h1>
        </div>
        <Button  onClick={sigIn}>Sign In with Google</Button>
        </div>
    </div>
  );
}

export default Login;
