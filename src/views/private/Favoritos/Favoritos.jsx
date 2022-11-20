import React,{useEffect, useContext} from 'react'
import ContextApi from '../../../context/ContextApiProider'


import '../Publicaciones/publicaciones.css'
import Cards from '../../../components/private/Cards/Cards'

const Publicaciones = () => {
  const {products, change}=useContext(ContextApi);
  const productFavorite=products?.filter((product)=> product.filled===true)
  useEffect(()=>{
    
  },[change])
  return (
    <div className="container-main-private">

      <div className="container-productos">
        <div className="productos">
        {productFavorite?.map((favorite,index)=>(
            <Cards
              key={index} 
              img={favorite.img} 
              alt={favorite.category} 
              idProduct={favorite.id} 
              filled={favorite.filled}
              iconFavoriteActive={favorite.iconFavoriteActive}
              nameProduct={favorite.nameProduct}
              price={favorite.price}
              condition={favorite.condition}
              producByEmail={favorite.producByEmail}
            />
          ))}
        </div>
        
      </div>
    </div>
    
  )
}

export default Publicaciones