import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {NavLink} from 'react-router-dom'


export const FormularioInicio = () => {

  return (
    <Form>
      <div className='text-form'>
        <h2 className='text-form-title'>Hola! 👋</h2>
        <p className='text-form-paragraph'>Si ya posees una cuenta en Mitiendita.com, inicia sesión con tus credenciales</p>
      </div>
      
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Ingresa email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="example@example.com" />
    </Form.Group>
    
    <div className='olvidar'>
      <i className="fa-solid fa-headphones mx-2"></i>
      <p className='m-0'>Olvidaste tu contraseña?</p>
    </div> 
    <div className='bnt-ingreso '>
    
      
      <NavLink  className='btn-inicio text-decoration-none' to='/private/tienda'>
        <Button className='btn-bg' type="submit">Inicio de Sesión</Button>
      </NavLink>
      
      
    </div>
  </Form>
);
}
