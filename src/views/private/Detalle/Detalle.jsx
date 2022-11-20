
import React,{useContext, useEffect} from "react";
import ContextApi from "../../../context/ContextApiProider";
import { useParams } from "react-router-dom";
import Heart from "../../../components/private/Heart/Heart";
import Button from 'react-bootstrap/Button'
import "./detalle.css";
const Detalle = () => {
  // const {products, setProducts, change, setChange}= useContext(ContextApi)
  const { idProduct, producByEmail } = useParams();
  const {products,users, change}= useContext(ContextApi)
  console.log(idProduct)
  console.log(producByEmail)
  console.log(products)
  let indexProduct = products.findIndex((index)=> index.id === idProduct && index.producByEmail === producByEmail);
  
  
  
  console.log(indexProduct)
  let productFavorite= products;
  productFavorite[indexProduct].filled= !productFavorite[indexProduct].filled;
  let indexUser = users.findIndex((index)=> index.email === producByEmail);
  let user=users[indexUser];
  useEffect(()=>{
    
  },[change])
  return (
    <div className="container-main-private">
      
      <div className="img-detalle">
      <h5 onClick={()=>window.history.back()}><i className="fa-solid fa-chevron-left fa-xs"></i>Volver</h5>
        <img src={products[indexProduct].img} alt={products[indexProduct].name} />
      </div>
      <div className="description-detalle">
        <div className="description">
        <div className="producto-favorito">
          <h3>{productFavorite[indexProduct].nameProduct}</h3>
          {productFavorite[indexProduct].iconFavoriteActive?
          <div className='heart'>
          <Heart filled={products[indexProduct].filled} idProduct={idProduct} producByEmail={producByEmail}/>
          </div>
          :<></>}
        </div>
        {/* Precio del Producto */}
        <p>$ {products[indexProduct].price}  {products[indexProduct].condition}</p>
        {/* Ubicación */}
        <h5>Ubicación del producto: </h5>
        <p>{user.comuna}, {user.provincia}, {user.region}.</p>
        <h5>Descripción del producto: </h5>
        <p>
        {products[indexProduct].description}
        </p>
        </div>
        <div className="vendedor-comprar">
          <p>Vendedor: {user.nameUser}</p>
          <Button>Comprar</Button>
        </div>
        
      </div>
    </div>
  );
};

export default Detalle;
