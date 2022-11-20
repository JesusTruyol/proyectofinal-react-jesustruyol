import React,{useContext} from 'react'
import ContextApi from '../../../context/ContextApiProider'
import {useNavigate} from 'react-router-dom'

import './categorias.css'

const Categorias = () => {
  const {categorys}=useContext(ContextApi);
  const navigate=useNavigate()
  return (
    <div className="container-categorias ">
        {
          categorys?.map((category)=>(
            <div key={category.category}
             className='categoria text-decoration-none'
             onClick={()=>navigate(`/private/tienda/filtros/${category.category}`)}
             >
              <div className='icon-categoria'> 
              <i className={category.icon}></i>
              </div>
              <div className='title-categoria'>
              <p>{category.category}</p>
              </div>
              
            </div>

          ))
        }

      </div>
  )
}

export default Categorias