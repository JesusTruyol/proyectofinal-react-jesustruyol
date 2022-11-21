import React,{useContext, useEffect} from 'react'
import ContextApi from '../../../context/ContextApiProider'
import CarouselInicio from '../../../components/private/CarouselInicio/CarouselInicio'
import Categorias from '../../../components/private/Categorias/Categorias'
import SearchBar from '../../../components/private/SearchBar/SearchBar'

import './tienda.css'

const Tienda = () => {
  const {change,setChange}= useContext(ContextApi)
  
  useEffect(()=>{
    setChange(!change);
  // eslint-disable-next-line 
  },[])

  return (
    <div className='container-tienda'>

        <SearchBar/>       

        <Categorias/>
        <div className="carousel-1">
          <CarouselInicio  cardsViews={1}/>
        </div>
        
        <div className="carousel-2">
          <CarouselInicio  cardsViews={2}/>
        </div>
        
        <div className="carousel-3">
          <CarouselInicio  cardsViews={3}/>
        </div>
        
        <div className="carousel-4">
          <CarouselInicio  cardsViews={4}/>
        </div>
        
    </div>
  )
}

export default Tienda