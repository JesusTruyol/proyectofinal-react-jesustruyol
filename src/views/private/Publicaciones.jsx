import React,{useEffect, useContext} from 'react'
import ContextApi from '../../context/ContextApi'

import Button from 'react-bootstrap/Button'

import '../../styles/private/publicaciones.css'
import CardsNew from '../../components/private/CardsNew'

const Publicaciones = () => {
  const {categorias, change}=useContext(ContextApi);

  useEffect(()=>{

  },[change])
  return (
    <div className="container-main-private">
      <div className="container-productos">
        <div className="button-agregar">
        <Button className="btn-agregar-producto">Agregar</Button ><Button className="btn-agregar-producto-movil"></Button>
        </div>
        <div className="productos">
        {categorias?.map((categoria)=>(
            <CardsNew
            key={categoria.name}
            img={categoria.img}
            alt={categoria.categoria}
            id={categoria.name}
            
            />
          ))}
        </div>
        
      </div>
    </div>
    
  )
}

export default Publicaciones