import React, { useState, useEffect } from "react";
//import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
 

function Home() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const handleEmail =(e) => {
        setEmail(e.target.value)
    };

    const handlePassword =(e) => {
        setPassword(e.target.value)
    };

    const authListener = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
               // window.localStorage.clear();
            } else{
                //window.localStorage.clear();
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    const handleSignup = () => {
        createUserWithEmailAndPassword(getAuth(), email, password)
        .then((response) =>{
            navigate("/profile");
            window.localStorage.setItem("user", response.user.email);
            setEmail(response.user.email);
            console.log("res",response);
        })
        .catch((err) =>{
            console.log("err",err);
        })
    };

    const handleSignin = () => {
        signInWithEmailAndPassword(getAuth(), email, password)
        .then((response) =>{
            navigate("/profile");
            window.localStorage.setItem("user", response.user.email);
            setEmail(response.user.email);
            console.log("res",response);
        })
        .catch((err) =>{
            console.log("err",err);
        })
    };
    
    return (
        <Container
        className="shadow p-4 mb-5 bg-white rounded"
        style={{width:"500px"}}
        >
            {hasAccount? <Signup email={email} password={password} hasAccount={hasAccount} handleEmail={handleEmail} handlePassword={handlePassword} handleSignup={handleSignup} />:
             <Signin email={email} password={password} hasAccount={hasAccount} handleEmail={handleEmail} handlePassword={handlePassword} handleSignin={handleSignin} />}
            
            
        </Container>
    );
}

export default Home;