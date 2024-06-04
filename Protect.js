import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Protect(props){

    var nav=useNavigate();
    var{Component}=props;
    
    useEffect(()=>{
    var login=localStorage.getItem("login");
   
    if(!login){
        nav("/Logis");
        }})
    
        return (
            <>
            <Component/>
                        </>   
            );
}