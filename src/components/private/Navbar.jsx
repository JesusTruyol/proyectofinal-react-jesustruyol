import React,{useEffect,useContext} from 'react'
import ContextApi from '../../context/ContextApi';
import '../../styles/private/navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'

import Dropdown from 'react-bootstrap/Dropdown';




export default function NavigateBar() {
  
  const setActiveClass = ({ isActive }) =>(
    isActive ?  "active-link text-decoration-none": "not-active-link text-decoration-none"
  )
  
  
    
  // 
  return (
    <Navbar className='navbar-main'>
        <div className='container-navbar'>
          <Nav className="">
            <NavLink  className="text-decoration-none" to='/private/tienda'>
              <div className='logo'>
                Logo Arrecho
              </div>
            </NavLink>
          </Nav>
          <Nav className="">
            <div>
            <Dropdown align={{ lg: 'start' }}>
      <Dropdown.Toggle className='dropdown-main'>
        <div className='button-sesion'>
          <div className="logo-usuario">
            <p>JT</p> 
          </div>
          <div className="usuario">
            Nombre Apellido
          </div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item><NavLink className={ setActiveClass } to='/private/perfil/edit'>Mi perfil</NavLink></Dropdown.Item>
        <Dropdown.Item><NavLink className={ setActiveClass } to='/private/perfil/publicaciones'>Mis publicaciones</NavLink></Dropdown.Item>
        <Dropdown.Item><NavLink className={ setActiveClass } to='/private/perfil/favoritos'>Mis favoritos</NavLink></Dropdown.Item>
        <Dropdown.Item><NavLink end className={ setActiveClass } to='/'>Cerrar Sesión</NavLink></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            
          </Nav>
        </div>
      </Navbar>
  )
}
