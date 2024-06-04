import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
var nav=useNavigate();
function userLogin(e){
    e.prevanteDefault();
    localStorage.setItem("login",true);
    nav('/');
}
    return (
        <>
        <h2 align="center">Login</h2>   
        <form onSubmit={userLogin}>
            <label>Username</label>
            <input type="text" placeholder="Enter your username"/>
            <label>Password</label>
            <input type="password" placeholder="Enter your password"/>
            <button type="submit">Login</button>
        </form>
        </>   
        );

}