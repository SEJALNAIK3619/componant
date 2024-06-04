import { useNavigate } from "react-router-dom";


export default function Products(){
  var nav = useNavigate();
    var data = [
        {
          product_name: "Office chair",
          product_category: "furniture",
          product_price: 900,
          product_image: "https://websyinfotech.com/Orphnage/images/office-chair.jpg"
        },
        {
          product_name: "TV Unit",
          product_category: "furniture",
          product_price: 1000,
          product_image: "https://websyinfotech.com/Orphnage/images/tv unit.jpg"
        },
        {
          product_name: "Solar Light",
          product_category: "garden_outdoor",
          product_price: 500,
          product_image: "https://websyinfotech.com/Orphnage/images/solar light.jpg"
        },
        {
          product_name: "Coffee mug",
          product_category: "kitchen_dining",
          product_price: 800,
          product_image: "https://websyinfotech.com/Orphnage/images/coffee mug.jpg"
        },
        {
          product_name: "Water bottle borosic",
          product_category: "kitchen_dining",
          product_price: 2000,
          product_image: "https://websyinfotech.com/Orphnage/images/water bottle.webp"
        },
        {
          product_name: "lunch box",
          product_category: "kitchen_dining",
          product_price: 800,
          product_image: "https://websyinfotech.com/Orphnage/images/lunch box.jpg"
        },
        {
          product_name: "Glass",
          product_category: "kitchen_dining",
          product_price: 1200,
          product_image: "https://websyinfotech.com/Orphnage/images/glass.jpg"
        }
    ];
    return (
            <>
            <h2 align="center">Product Component</h2>
            <div className="container1">
              <div className="box1">
              <div className="box2">
            {
              data.map((value)=>(
                <>
                 <div onClick={()=>nav(`/Singleproduct/${value.product_name}`)}>
                 <img src={value.product_image}/> 
                  <h3>{value.product_name}</h3>
                  <h3>{value.product_price}</h3>
                 </div>
                </>
              ))
            }
            </div></div></div>
            </>
            );

}
