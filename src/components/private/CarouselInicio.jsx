import React,{useContext, useEffect} from 'react'
import Carousel from 'nuka-carousel';
import ContextApi from '../../context/ContextApi'
import Cards from './Cards';
import '../../styles/private/carouselInicio.css'

const CarouselInicio = ({cardsViews}) => {
  const {categorias, change, cardViews}=useContext(ContextApi);
  

  const windowsWhidthHeight=()=>{
    if (window.screen.width<540){
      return(1);
    }else if (window.screen.width>540 && window.screen.width<1040){
      return(2);
    }else if (window.screen.width>1040 && window.screen.width<1400){
      return(3);
    }else{
      return(4);
    }
      console.log(window.screen.width)
  }


  useEffect(()=>{
    

  },[])
  return (
    <Carousel wrapAround={true} slidesToShow={cardsViews} autoplay={true} autoplayInterval={4500} 
    renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
      <button className='btn-control' onClick={previousSlide} disabled={previousDisabled}>
        <i className="fa-solid fa-chevron-left fa-xl"></i>
      </button>
    )}
    renderCenterRightControls={({ nextDisabled, nextSlide }) => (
      <button className='btn-control' onClick={nextSlide} disabled={nextDisabled}>
        <i className="fa-solid fa-chevron-right fa-xl"></i>
      </button>
    )} 
    >
      {categorias.map(imgCard =>        
            <Cards key={imgCard.categoria} img={imgCard.img} alt={imgCard.categoria} id={imgCard.name} filled={imgCard.filled}/>
        )}
      </Carousel>
  )
}

export default CarouselInicio