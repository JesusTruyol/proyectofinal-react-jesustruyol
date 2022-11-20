import React from 'react'
import Heart from '../Heart/Heart'
import {useNavigate} from 'react-router-dom'
import './cards.css'

const Cards = ({img, alt, idProduct, filled, nameProduct, price, condition, producByEmail,iconFavoriteActive}) => {
  const navigate=useNavigate()

  const addProductShoppin=()=>{
    // let indexUser = users.findIndex((index)=> index.email === userByEmail)
  }

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
            <i class="fa-solid fa-cart-shopping"></i>
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