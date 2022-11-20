import React,{useState, useContext} from 'react'
import { render } from "@testing-library/react";
import ContextApi from '../../../context/ContextApiProider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import db from '../../../js/database'
import Modals from '../../Modals';
import { validName,validEmail, validPassword } from '../../../js/Regex';

export const FormularioRegistro = () => {
 

  const {key, setKey, users, setUsers, favoriteProducts, setFavoriteProducts}= useContext(ContextApi)

  const [name, setName]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [password2, setPassword2]= useState("")
  const [disabledPassword, setDisabledPassword]= useState(true)
  const [disabledPassword2, setDisabledPassword2]= useState(true)
  const [disabledButton, setDisabledButton]= useState(true)
  const [match, setMatch]= useState("match")


  const setEmailForm= (value) => {
    setEmail(value)
    // let validation = db.validEmailForm(value)
    // setDisabledPassword(!validation)
    setDisabledPassword(false)
    
  }

  

  const setPasswordForm = (value) =>{
    setPassword(value)
    // let validation = db.validPasswordForm(value)
    // setDisabledPassword2(!validation)
    setDisabledPassword2(false)
    confirmarContraseña({password:value, password2:password2})
    
  }





  const setPassword2Form=(value)=>{
    setPassword2(value)
    console.log(password2)
    confirmarContraseña({password:password,password2:value})
  }

  const confirmarContraseña=({password,password2})=>{ 
    
    
    if(password === password2 && password !=='' && password2 !== ''){
      setDisabledButton(false)
      setMatch("match")  
    }else{
      setDisabledButton(true)
      setMatch("not-match")
    }
  }

  const crearUsuario= async()=>{
    if (![...users.values()].some(user => user.email === email)){
      const create= [
        ...users,{
            nameUser:"",
            name:name,
            email:email,
            password:password,
            region:"",
            provincia:"",
            comuna:"",
            phono:"",
            description:"",
            imgUser:"",
            favoriteProducts:[]  
          }
      ]

      setFavoriteProducts([...favoriteProducts, Object.fromEntries([[email,""]])])
    
      setUsers(create)
      // Usuario creado satisfactoriamente
      setKey('inicio')
      setName("")
      setEmail("")
      setPassword("")
      setPassword2("")
      setDisabledButton(true)
      setDisabledPassword(true)
      setDisabledPassword2(true)
      console.log('usuario creado')
      render(<Modals  title={"Información"}  text={'Usuario Creado'}/>);
      
    }
    else {
      // Usuario ya existe
      console.log(users)
      console.log('usuario existe')
      render(<Modals  title={"Información"}  text={`El correo ${email} ya existe`}/>);
    
    }
  }

  

  return (
    <Form >
      <div className='text-form'>
        <h2 className='text-form-title'>A dos pasos de la grandeza! 🚀</h2>
        <p className='text-form-paragraph'>Crea tu cuenta en 2 sencillos pasos.</p>
      </div>

    <Form.Group className="mb-2" controlId="formBasicName">
      <Form.Label>Nombre y Apellidos</Form.Label>
      <Form.Control type="text" placeholder="Ingresa Nombre y Apellidos" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-2" controlId="formBasicEmail">
      <Form.Label>Correo</Form.Label>
      <Form.Control type="email" placeholder="example@example.com"
      value= {email}
      onChange={(e)=>setEmailForm(e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-1" controlId="formBasicPassword">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type="password" placeholder="Contraseña" 
      value={password}
      onChange={(e)=>setPasswordForm(e.target.value)}
      disabled={disabledPassword}
      />
      <div className='text-form-password'>
      <p > 
      Recuerda incluir mínimo 8 caracteres alfanuméricos y al menos un carácter especial (p.ej: #$%/&@)
      </p>
      </div>
      
    </Form.Group>

    <Form.Group className="mb-2" controlId="formBasicPassword">
      <Form.Label>Repetir Contraseña</Form.Label>
      <Form.Control 
      className={`form-control-${match}`}
      type="password" placeholder="Confirmar contraseña" 
      value= {password2}
      onChange={(e)=>setPassword2Form(e.target.value)}
      disabled={disabledPassword2}
      />
      <div className='text-form-password'>
      <p className={match}> 
      Las contraseñas no coinciden
      </p>
      </div>
    </Form.Group>

    <div className='bnt-ingreso'>
      <Button className='btn-bg' 
      onClick={()=> crearUsuario()}
      disabled={disabledButton}
      >
        Registrarse
      </Button>
    </div>
    
  </Form>
);
}
