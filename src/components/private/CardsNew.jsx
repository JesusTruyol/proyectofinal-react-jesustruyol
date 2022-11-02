import React from 'react'

import {useNavigate} from 'react-router-dom'
import '../../styles/private/cards.css'

const CardsNew = ({img, alt, id}) => {
  const navigate=useNavigate()
  
  return (

    <div className="card-container">
      
      <img className='card-img' src={img} alt={alt}/>
      <div className='card-body px-3 mt-3'>
        <div className='card-title'>Nombre ({alt} ) </div>
        <div className='card-price'>$ 12.999</div>
        <div className='buttons'>
          <button className='button-glas'
           onClick={()=>navigate(`/private/tienda/filtros/${id}`)}>
            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          </button>
          <button className='button-glas'
           >
            <i className="fa-solid fa-pen-to-square fa-xl"></i>
          </button>
          <button className='button-glas'
           >
            <i className="fa-solid fa-trash-can fa-xl"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardsNew