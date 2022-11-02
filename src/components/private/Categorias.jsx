import React,{useContext} from 'react'
import ContextApi from '../../context/ContextApi'
import {NavLink} from 'react-router-dom'
import '../../styles/private/categorias.css'

const Categorias = () => {
  const {categorias}=useContext(ContextApi);

  return (
    <div className="container-categorias ">
        {
          categorias?.map((categoria)=>(
            <NavLink key={categoria.categoria}
             className='categoria text-decoration-none'
             to='/private/tienda/filtros'
             >
              <div className='icon-categoria'> 
              <i className={categoria.icon}></i>
              </div>
              <div className='title-categoria'>
              <p>{categoria.categoria}</p>
              </div>
              
            </NavLink>

          ))
        }

      </div>
  )
}

export default Categorias