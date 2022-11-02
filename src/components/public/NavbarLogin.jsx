import React from 'react'
import '../../styles/public/navbarLogin.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarLogin = () => {

  // 
  return (
    <Navbar className='navbar-main-login'>
        <div className='container-navbar'>
          <Nav className="">
            <div className='logo'>
              Logo Arrecho
            </div>
          </Nav>
        </div>
      </Navbar>
  )
}

export default NavbarLogin