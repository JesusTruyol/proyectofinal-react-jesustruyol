import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FormularioInicio } from './FormularioInicio';
import { FormularioRegistro } from './FormularioRegistro';

export const FormularioIngreso = () => {
  const [key, setKey] = useState('inicio');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="inicio" title="Inicio de Sesión">
        <div className='tab-content-main'>
          <FormularioInicio/>
        </div>
      </Tab>
      <Tab eventKey="registrarse" title="Registrase">
        <div className='tab-content-main'>
          <FormularioRegistro/>
        </div>
      </Tab>
      
    </Tabs>
  )
}

