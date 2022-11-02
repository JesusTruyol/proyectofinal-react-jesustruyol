import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormularioRegistro = () => {
  return (
    <Form >
      <div className='text-form'>
        <h2 className='text-form-title'>A dos pasos de la grandeza! 🚀</h2>
        <p className='text-form-paragraph'>Crea tu cuenta en 2 sencillos pasos.</p>
      </div>

    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Nombre y Apellidos</Form.Label>
      <Form.Control type="text" placeholder="Ingresa Nombre y Apellidos" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="example@example.com" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      <div className='text-form-password'>
      <p > 
      Recuerda incluir mínimo 8 caracteres alfanuméricos y al menos un carácter especial (p.ej: #$%/&@)
      </p>
      </div>
      
    </Form.Group>

    <div className='bnt-ingreso'>
      <Button className='btn-bg' type="submit">
        Registrarse
      </Button>
    </div>
    
  </Form>
);
}
