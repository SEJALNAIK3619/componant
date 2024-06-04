import { useNavigate } from "react-router-dom";

export default function Home(){
    var navigate=useNavigate();
    return (
        <>
        
        <h2 align="center">Home Component</h2>   
        <button onClick={()=>navigate('Aboutus')}>About Us</button>
        <ul>
            <li onClick={()=>navigate('product/web')}>Web Developement</li>
            <li onClick={()=>navigate('product/app')}>App Developement</li>
        </ul>
        </>   
        );

}