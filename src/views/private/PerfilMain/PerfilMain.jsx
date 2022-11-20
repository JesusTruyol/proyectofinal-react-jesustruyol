import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Publicaciones from '../Publicaciones/Publicaciones'
import CardShoppin from '../CardShoppin/CardShoppin'
import Favoritos from '../Favoritos/Favoritos'
import Perfil from '../Perfil/Perfil'
import { NavbarLeft } from '../../../components/private/NavbarLeft/NavbarLeft'
import './perfilMain.css'
import AddProducts from '../AddProducts/AddProducts'

const PerfilMain = () => {
  return (
    <div>
          <div className='container-left'>
            <NavbarLeft/>
          </div>
          
          <Routes>
            <Route path='/edit' element={<Perfil/>}/>
            <Route path='/publicaciones' element={<Publicaciones/>}/>
            <Route path='/publicaciones/add/:idProduct/:producByEmail' element={<AddProducts/>}/>
            <Route path='/favoritos' element={<Favoritos/>}/>
            <Route path='/cardShoppin' element={<CardShoppin/>}/>
            
          </Routes>
          
    </div>
  )
}

export default PerfilMain