import React, { useContext, useEffect } from "react";
import ContextApi from "../../../context/ContextApiProider";
import Heart from '../Heart/Heart'
import {useNavigate} from 'react-router-dom'
import './cards.css'

const Cards = ({img, alt, idProduct, filled, nameProduct, price, condition, producByEmail,iconFavoriteActive}) => {
  
  const {users,products,change,setChange,setUsers, userByEmail, setTotalPrice}= useContext(ContextApi) 
  const navigate=useNavigate()

  const addProductShoppin=()=>{
    let indexUser = users.findIndex((index)=> index.email === userByEmail)
    users[indexUser].shoppinProducts= [... users[indexUser].shoppinProducts, {
          id:idProduct,
          producByEmail:producByEmail,
          quantity:1
        }
      ]
    console.log(users[indexUser])

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
  useEffect(() => {
    
  }, [change]);

  return (

    <div className="card-container">
      
      <img className='card-img' src={img} alt={alt}/>
      <div className='card-body px-3 mt-3'>
        <div className='card-title'>{nameProduct} </div>
        <div className='card-price'>$ {price.toLocaleString("es-CL")}  {condition}</div>
        <div className='buttons'>
          <button className='button-glas'
           onClick={()=>navigate(`/private/detalle/${idProduct}/${producByEmail}`)}>
            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          </button>

          {iconFavoriteActive?
          
          <button className='button-glas'
           onClick={()=> addProductShoppin()}>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          :<></>}
          
          {iconFavoriteActive?
          
            <div className='heart'>
              <Heart filled={filled} idProduct={idProduct} producByEmail={producByEmail}/>
            </div>
            :<></>}
          
        </div>
      </div>
    </div>
  )
}

export default Cards