import React from 'react';
import ReactDOM from 'react-dom/client';
import {ContextApiProvider} from './context/ContextApiProider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextApiProvider>
      <App />
    </ContextApiProvider>
  </React.StrictMode>
);
