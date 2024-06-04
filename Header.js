import { Link } from "react-router-dom";
import logo from "./logo.png";
export default function Header(){
return(
<>
<header>
    <img src={logo} alt="logo"/>
    <nav>
        <ul>
            <li>
            <Link to ="/">Home</Link>
            </li>
            <li>
            <Link to ="services">Services</Link>
            </li>
            <li>
            <Link to ="Products">Products</Link>
            </li>
            <li>
            <Link to ="Aboutus">About Us</Link>
            </li>
            <li>
            <Link to ="Contactus">Contact Us</Link>
            </li>
            <li>
            <Link to ="Blog">Blog</Link>
            </li>
            <li>
            <Link to ="Logis">Logis</Link>
            </li>
            <li>
            <Link to ="Page404">Login</Link>
            </li>
            
        </ul>
    </nav>
</header>
</>
      );
}