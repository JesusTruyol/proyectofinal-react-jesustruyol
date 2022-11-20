import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbarLogin.css'


const NavbarLogin = () => {

  // 
  return (
    <Navbar className='navbar-main-login'>
        <div className='container-navbar'>
          <Nav className="">
            <div className='logo'>
              Logo
            </div>
          </Nav>
        </div>
      </Navbar>
  )
}

export default NavbarLogin