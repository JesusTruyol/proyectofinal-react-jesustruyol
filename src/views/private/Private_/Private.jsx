import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from '../../../components/private/Navbar/Navbar'
import Tienda from '../Tienda/Tienda'
import TiendaFiltros from '../TiendaFiltros/TiendaFiltros'
import Detalle from '../Detalle/Detalle'
import PerfilMain from '../PerfilMain/PerfilMain'
import './private.css'
import Footer from '../../../components/private/Footer/Footer'

const Private = () => {
  return (
    <div>

          <Navbar/>
          <div className='img-bg'></div>
          <Routes>
            <Route path='/tienda' element={<Tienda/>}/>
            <Route path='/tienda/filtros/:idCategory' element={<TiendaFiltros/>}/>
            <Route path='/detalle/:idProduct/:producByEmail' element={<Detalle/>}/>
            <Route path='/perfil/*' element={<PerfilMain/>}/>
          </Routes>
          <Footer/>
    </div>
  )
}

export default Private