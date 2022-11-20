import React from 'react'
import {FormularioIngreso} from '../../../components/public/FormularioIngreso/FormularioIngreso'
import './login.css'


const Login = () => {
  return (
    <div className='container-main-inicio'>
      <div className='container-img'>
        <div className='text-main '>
        <h1 className='text-main-title'>Ofertas Mundialistas...</h1>
        <div className='linea'></div>
        <p className='text-main-pagrapha'>Mas de 500 productos de la categoría deportescon 80% de descuento</p>
        </div>
        <div  className='img-main'>
          <img src="../assets/imgs/ilustracion.png" alt="ilustracion.png" />
        </div>
        
      </div>
      <div className='container-formulario'>
        <FormularioIngreso /> 
        <div className='derechos'>
          <p>©Jesus Truyol Derechos y Zurdos reservados</p>
        </div>    
      </div>
      
      
    </div>
  )
}

export default Login