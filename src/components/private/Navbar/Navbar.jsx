import React, { useContext } from "react";
import ContextApi from "../../../context/ContextApiProider";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./navbar.css";

export default function NavigateBar() {
  const { setAuth, users, userByEmail, setUserByEmail,totalPrice } =
    useContext(ContextApi);

  const setActiveClass = ({ isActive }) =>
    isActive
      ? "dropdown-item active-link text-decoration-none"
      : "dropdown-item not-active-link text-decoration-none";
  let indexUser = users.findIndex((index) => index.email === userByEmail);
  let user = users[indexUser];

  const closed = () => {
    setAuth(false);
    setUserByEmail("");
  };

  return (
    <Navbar className="navbar-main">
      <div className="container-navbar">
        <Nav className="">
          <NavLink className="text-decoration-none" to="/private/tienda">
            <div className="logo">Logo</div>
          </NavLink>
        </Nav>
        <Nav className="card-dropdown">
          <NavLink className={ setActiveClass } to='/private/perfil/cardShoppin'><h6>🛒 ${ totalPrice}</h6></NavLink>
          <div>
          
            <Dropdown
              align={{ lg: "start" }}
              drop="start"
              id={`dropdown-button-drop-start`}
            >
              <Dropdown.Toggle className="dropdown-main">
                <div className="button-sesion">
                  <div className="logo-usuario">
                    {user.imgUser ? (
                      <img
                        className="w-100"
                        src={user.imgUser}
                        alt="Imagen Perfil"
                      />
                    ) : (
                      <p>{user.name.charAt(0).toUpperCase()}</p>
                    )}
                  </div>
                  <div className="usuario">{user.name}</div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>

                  <NavLink className={setActiveClass} to="/private/perfil/edit">
                    Mi perfil
                  </NavLink>
                

                {/*
                  <NavLink className={setActiveClass} to="/private/perfil/edit">
                    Mi perfil
                  </NavLink>
                 */}
              
                  <NavLink
                    className={setActiveClass}
                    to="/private/perfil/publicaciones"
                  >
                    Mis publicaciones
                  </NavLink>
                
              
                  <NavLink
                    className={setActiveClass}
                    to="/private/perfil/favoritos"
                  >
                    Mis favoritos
                  </NavLink>
                
              
                  <NavLink
                    end
                    className={setActiveClass}
                    to="/"
                    onClick={() => closed()}
                  >
                    Cerrar Sesión
                  </NavLink>
                
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Nav>
      </div>
    </Navbar>
  );
}
