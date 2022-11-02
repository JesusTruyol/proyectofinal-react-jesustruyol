import React,{useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ContextApi from './context/ContextApi'
import { Public } from './views/public/Public'
import Private from './views/private/Private'
import Windows from './components/public/Windows'




const App = () => {

  const [categorias,setCategorias]=useState([])
  const [change,setChange]= useState(false)
  const[regiones,setRegiones]=useState("")
  const[region,setRegion]=useState("")
  const[idRegion,setIdRegion]=useState("")
  const[provincias,setProvincias]=useState("")
  const[provincia,setProvincia]=useState("")
  const[idprovincia,setIdProvincia]=useState("")
  const[comunas,setComunas]=useState("")
  const[comuna,setComuna]=useState("")
  const[idComuna,setIdComuna]=useState("")
  const [cardViews,setCardViews]=useState(1)
  const url='./categorias.json'
  
  const globalData={
    categorias,setCategorias, 
    change,setChange,
    regiones,setRegiones,region,setRegion,idRegion,setIdRegion,
    provincias,setProvincias,provincia,setProvincia,idprovincia,setIdProvincia,
    comunas,setComunas,comuna,setComuna,idComuna,setIdComuna,
    cardViews,setCardViews
   }

  const getDataApi= async ()=>{
    const response= await fetch(url);
    const getdata= await response.json();
    console.log(getdata)
    setCategorias(getdata)
  }

  useEffect(()=>{
    getDataApi();
  },[])

  return (
    <div>
      <BrowserRouter>
        <ContextApi.Provider value={globalData}>
          <Routes>
            <Route path='/' element={<Public/>}/>
            <Route path='/private/*' element={<Private/>}/>

            {/* <Route path='*' element={<NotFound/>}/> */}
          </Routes>
          <Windows/>
        </ContextApi.Provider>
      </BrowserRouter>
      
    </div>
  )
}
export default App;
