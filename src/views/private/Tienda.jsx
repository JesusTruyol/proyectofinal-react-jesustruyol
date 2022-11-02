import React,{useContext, useEffect} from 'react'
import ContextApi from '../../context/ContextApi'
import CarouselInicio from '../../components/private/CarouselInicio'
import Categorias from '../../components/private/Categorias'
import SearchBar from '../../components/private/SearchBar'

import '../../styles/private/tienda.css'

const Tienda = () => {
  const {change,setChange}= useContext(ContextApi)
  
  useEffect(()=>{
    setChange(!change);
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