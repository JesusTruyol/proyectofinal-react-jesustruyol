import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Publicaciones from './Publicaciones'
import Favoritos from './Favoritos'
import Perfil from './Perfil'
import { NavbarLeft } from '../../components/private/NavbarLeft'
import '../../styles/private/perfilMain.css'

const PerfilMain = () => {
  return (
    <div>
          <div className='container-left'>
            <NavbarLeft/>
          </div>
          
          <Routes>

            <Route path='/edit' element={<Perfil/>}/>
            <Route path='/publicaciones' element={<Publicaciones/>}/>
            <Route path='/favoritos' element={<Favoritos/>}/>
          </Routes>
          
    </div>
  )
}

export default PerfilMain