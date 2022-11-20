import React,{useContext} from 'react'
import ContextApi from './context/ContextApiProider'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Public } from './views/public/Public'
import Private from './views/private/Private_/Private'
import { Navigate} from 'react-router-dom'


const App = () => {
  const {auth}= useContext(ContextApi)
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Public/>}/>
            <Route  path='/private/*'element={auth?<Private/>:<Navigate to='/'/>}/>

            {/* <Route path='*' element={<NotFound/>}/> */}
          </Routes>
      </BrowserRouter>
      
    </div>
  )
}
export default App;
