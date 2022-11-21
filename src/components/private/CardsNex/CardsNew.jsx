import React,{useContext} from 'react'
import ContextApi from '../../../context/ContextApiProider'
import {useNavigate} from 'react-router-dom'
import '../Cards/cards.css'

const CardsNew = ({img, alt, idProduct, filled, nameProduct, price, condition, producByEmail}) => {
  const {change, setChange, products, setProducts}= useContext(ContextApi)
  const navigate=useNavigate()
  
  const clear=(idProduct)=>{
    setProducts(products.filter((product) => product.id !== idProduct))
    setChange(!change);
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
          <button className='button-glas'
            onClick={()=>navigate(`/private/perfil/publicaciones/add/${idProduct}/${producByEmail}`)}
          >
            <i className="fa-solid fa-pen-to-square fa-xl"></i>
          </button>
          <button className='button-glas'
          onClick={()=> clear(idProduct)}
          >
            <i className="fa-solid fa-trash-can fa-xl"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardsNew