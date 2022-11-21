
import React,{useContext, useEffect} from "react";
import ContextApi from "../../../context/ContextApiProider";
import { useParams } from "react-router-dom";
import Heart from "../../../components/private/Heart/Heart";
import Button from 'react-bootstrap/Button'
import "./detalle.css";
const Detalle = () => {
  
  const { idProduct, producByEmail } = useParams();
  const {users,products,change,setChange,setUsers, userByEmail, setTotalPrice}= useContext(ContextApi)
  console.log(idProduct)
  console.log(producByEmail)
  console.log(products)
  let indexProduct = products.findIndex((index)=> index.id === idProduct && index.producByEmail === producByEmail);
  let productFavorite= products;
  productFavorite[indexProduct].filled= !productFavorite[indexProduct].filled;
  let indexUser = users.findIndex((index)=> index.email === producByEmail);
  let user=users[indexUser];

  const addProductShoppin=()=>{
    let indexUser = users.findIndex((index)=> index.email === userByEmail)
    users[indexUser].shoppinProducts= [... users[indexUser].shoppinProducts, {
          id:idProduct,
          producByEmail:producByEmail,
          quantity:1
        }
      ]

    setUsers(users)
    
    let productsFilter = products?.filter((product) =>{
        return users[indexUser].shoppinProducts.some((shoppinProduct)=> shoppinProduct.id === product.id && shoppinProduct.producByEmail === product.producByEmail)
    });
    let resultProductShoppin = productsFilter.map((productFilter)=> {
      let product= users[indexUser].shoppinProducts.some((shoppinProduct)=> shoppinProduct.id === productFilter.id && shoppinProduct.producByEmail === productFilter.producByEmail)
      let indexQuantity= users[indexUser].shoppinProducts.findIndex((index)=> index.id === productFilter.id && index.producByEmail === productFilter.producByEmail)
      if(product) return {...productFilter, quantity:users[indexUser].shoppinProducts[indexQuantity].quantity}
      })

      let totalPriceShoppin= resultProductShoppin.filter((product) => product.quantity > 0)
       .reduce((total, product)=>  total + product.price *product.quantity ,0)
    
    setTotalPrice(totalPriceShoppin.toLocaleString("es-CL"))
    setChange(!change)
  }

  useEffect(()=>{
    // eslint-disable-next-line
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
          <Button onClick={()=> addProductShoppin()}>
            <i className="fa-solid fa-cart-shopping"></i>
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default Detalle;
