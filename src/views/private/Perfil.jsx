import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../../styles/private/perfil.css";

const Perfil = () => {
  return (
    <div className="container-main-perfil">
      <div className="container-perfil">
        <div className="container-form-perfil">

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Nombre de Usuario</Form.Label>
              <Form.Control
                className="form-control-perfil"
                type="text"
                placeholder="Ingresa tu nombre de Usuario"
              />
            </Form.Group>

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Nombre y Apellidos</Form.Label>
              <Form.Control
              className="form-control-perfil"
                type="text"
                placeholder="Ingresa tu nombre y apelidos"
              />
            </Form.Group>

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Región</Form.Label>
              <Form.Select className="form-control-perfil"
              aria-label="Default select example">
                <option>Selecciona una región</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Ciudad</Form.Label>
              <Form.Select className="form-control-perfil"
              aria-label="Default select example">
                <option>Selecciona una ciudad</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Dirección</Form.Label>
              <Form.Control className="form-control-perfil"
              type="text" placeholder="Ingresa tu dirección" />
            </Form.Group>

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Correo</Form.Label>
              <Form.Control className="form-control-perfil"
              type="email" placeholder="Ingreesa tu correo" />
            </Form.Group>

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Movil</Form.Label>
              <Form.Control 
              className="form-control-perfil"
                type="number"
                placeholder="Ingreesa tu numero de contacto"
              />
            </Form.Group>

        </div>
        <div className="img-perfil">
          <h6>Imagen del perfil</h6>
          <div className="img"></div>
          <div className="subir-img">
            <p>Subir imagen</p>
            <Form.Control type="file" />
          </div>
        </div>
      </div>
    
      <Form.Group className="form-group-perfil descripcion">
        <Form.Label className="my-0 ms-3">Descripción de la Empresa</Form.Label>
        <Form.Control 
        as="textarea" rows={4}
        className="form-control-perfil-descripcion" type="text" placeholder="Ingresa tu dirección" />
      </Form.Group>
      <div className="btn-guardar-perfil">
      <Button >Guardar</Button>
      </div>
      
    
    </div>
  );
};

export default Perfil;
