import { useParams } from "react-router-dom";

export default function SingleProduct(){
    var {name} = useParams();
    return(
        <>
            <h2 align="center">Single Product Component</h2>
            <h3>{name}</h3>
        </>
    );
}