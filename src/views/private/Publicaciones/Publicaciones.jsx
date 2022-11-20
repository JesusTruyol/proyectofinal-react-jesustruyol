import React,{useEffect, useContext} from 'react'
import ContextApi from '../../../context/ContextApiProider'
import {useNavigate} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import CardsNew from '../../../components/private/CardsNex/CardsNew'
import './publicaciones.css'

const Publicaciones = () => {
  const {products, change, userByEmail}=useContext(ContextApi);
  const navigate=useNavigate()
  const publishedProduct= ()=>{
    return products.filter((product)=>product.producByEmail === userByEmail)
  }
  useEffect(()=>{

  },[change])
  return (
    <div className="container-main-private">
      <div className="container-productos">
        <div className="button-agregar">
        
          <Button 
          className="btn-agregar-producto"
          onClick={()=>navigate(`/private/perfil/publicaciones/add/null/null`)}
          >Agregar</Button >
       
        <Button className="btn-agregar-producto-movil"></Button>
        </div>
        <div className="productos">
        {publishedProduct().map((product, index)=>(
            <CardsNew
            key={index}
            img={product.img}
            alt={product.category}
            idProduct={product.id}
            nameProduct={product.nameProduct}
            price={product.price}
            condition={product.condition}
            iconFavoriteActive={product.iconFavoriteActive}
            producByEmail={product.producByEmail}
            />
          ))}
        </div>
        
      </div>
    </div>
    
  )
}

export default Publicaciones