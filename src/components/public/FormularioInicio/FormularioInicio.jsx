import React,{useState, useContext} from 'react'
import { render } from "@testing-library/react";
import ContextApi from '../../../context/ContextApiProider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modals from '../../Modals'
import {useNavigate} from 'react-router-dom'
import { validName,validEmail, validPassword } from '../../../js/Regex';
import db from '../../../js/database'


export const FormularioInicio = () => {
    const {setAuth, setKey, users, setUserByEmail}= useContext(ContextApi)
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [disabledPassword, setDisabledPassword]= useState(true)
    const [disabledButton, setDisabledButton]= useState(true)
    const navigate=useNavigate();

    const setEmailForm= (value) => {
      setEmail(value)
      // let validation = db.validEmailForm(value)
      // setDisabledPassword(!validation)
      setDisabledPassword(false)
      
  
    }

    const setPasswordForm = (value) =>{
      setPassword(value)
      // let validation = db.validPasswordForm(value)
      // setDisabledButton(!validation)
      setDisabledButton(false)
    }



    const inicioSesion=async()=>{
        
      if ([...users.entries()].find(([id, doc]) => doc.email === email && doc.password === password)){
        //Usuario Ok
        setAuth(true)
        setUserByEmail(email)
        setEmail('')
        setPassword('')
        setDisabledButton(true)
        setDisabledPassword(true)
        navigate('/private/tienda');
        console.log('usuario ok')
      }
      else {
        //Usuario no existe
        console.log('usuario no existe')
        render(<Modals  title={"Información"}  text={`No existe el usuario`}/>);
        setKey('registrarse')
        setEmail('')
        setPassword('')
      }
    }

  return (
    <Form>
      <div className='text-form'>
        <h2 className='text-form-title'>Hola! 👋</h2>
        <p className='text-form-paragraph'>Si ya posees una cuenta en Mitiendita.com, inicia sesión con tus credenciales</p>
      </div>
      
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Correo</Form.Label>
      <Form.Control type="email" placeholder="Ingresa email" 
      value= {email}
      onChange={(e)=>setEmailForm(e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type="password" placeholder="example@example.com" 
      value={password}
      onChange={(e)=>setPasswordForm(e.target.value)}
      disabled={disabledPassword}
      />
    </Form.Group>
    
    <div className='olvidar'>
      <i className="fa-solid fa-headphones mx-2"></i>
      <p className='m-0'>Olvidaste tu contraseña?</p>
    </div> 
    <div className='bnt-ingreso '>
    
      

        <Button className='btn-bg'
        onClick={()=>inicioSesion()}
        disabled={disabledButton}
        >Inicio de Sesión</Button>

      
      
    </div>
  </Form>
);
}
