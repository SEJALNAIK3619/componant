import { Link, Outlet } from "react-router-dom";

export default function Services(){

    return (
        <>
        <h2 align="center">Services Component</h2>   

        <div className="Services-container">
            
            <div className="Services-Box1" >
                <ul>
                    <li>
                        <Link to="web">Web Development</Link>
                    </li>
                    <li>
                        <Link to="mobile">App Development</Link>
                    </li>
                </ul>
            </div>

            <div className="Services-Box2">
                <ul>
                    <li>
                        <h3>Services</h3>
                        <Outlet/>

                    </li>
                </ul>
            </div>

       </div>
        </>   
        );

}