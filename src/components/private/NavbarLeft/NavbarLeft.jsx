import React,{useContext} from 'react'
import ContextApi from '../../../context/ContextApiProider';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import './navbarLeft.css'

export const NavbarLeft = () => {
  const {setAuth, setUserByEmail}= useContext(ContextApi)
  
  const setActiveClass = ({ isActive }) =>(
    isActive ?  "active-link text-decoration-none": "not-active-link text-decoration-none"  
  )

  const closed=()=>{
    setAuth(false)
    setUserByEmail('')
  }

  return (
      <Navbar className='navbar-main-left'>
        <NavLink className={ setActiveClass } to='/private/tienda'><h4><i className="fa-solid fa-chevron-left fa-xs"></i> Inicio</h4> </NavLink>
        <div className="linea-navbar-left"></div>
        <NavLink className={ setActiveClass } to='/private/perfil/edit'>Mi perfil</NavLink>
        <NavLink className={ setActiveClass } to='/private/perfil/publicaciones'>Mis publicaciones</NavLink>
        <NavLink className={ setActiveClass } to='/private/perfil/favoritos'>Mis favoritos</NavLink>
        <NavLink className={ setActiveClass } to='/private/perfil/cardShoppin'>Carrito</NavLink>
        <NavLink
          end
          className={ setActiveClass } to='/' onClick={()=> closed()}>Cerrar Sesión</NavLink>
        

    </Navbar>
  )
}
