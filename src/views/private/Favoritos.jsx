import React,{useEffect, useContext} from 'react'
import ContextApi from '../../context/ContextApi'


import '../../styles/private/publicaciones.css'
import Cards from '../../components/private/Cards'

const Publicaciones = () => {
  const {categorias, change,setChange}=useContext(ContextApi);
  const favoritos=categorias?.filter((categoria)=> categoria.filled===true)
  useEffect(()=>{
    
  },[change])
  return (
    <div className="container-main-private">

      <div className="container-productos">
        <div className="productos">
        {favoritos?.map((favorito)=>(
            <Cards
            key={favorito.name}
            img={favorito.img}
            alt={favorito.categoria}
            id={favorito.name}
            filled={favorito.filled}
            />
          ))}
        </div>
        
      </div>
    </div>
    
  )
}

export default Publicaciones