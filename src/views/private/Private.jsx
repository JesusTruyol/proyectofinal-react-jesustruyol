import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from '../../components/private/Navbar'
import Tienda from './Tienda'
import TiendaFiltros from './TiendaFiltros'
import Detalle from './Detalle'
import PerfilMain from './PerfilMain'
import '../../styles/private/private.css'
import Footer from '../../components/private/Footer'

const Private = () => {
  return (
    <div>

          <Navbar/>
          <div className='img-bg'></div>

          <Routes>
            <Route path='/tienda' element={<Tienda/>}/>
            <Route path='/tienda/filtros' element={<TiendaFiltros/>}/>
            <Route path='/tienda/filtros/:id' element={<Detalle/>}/>
            <Route path='/perfil/*' element={<PerfilMain/>}/>
          </Routes>
          <Footer/>
    </div>
  )
}

export default Private