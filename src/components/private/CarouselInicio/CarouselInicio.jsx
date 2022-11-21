import React,{useContext, useEffect} from 'react'
import Carousel from 'nuka-carousel';
import ContextApi from '../../../context/ContextApiProider'
import Cards from '../Cards/Cards';
import './carouselInicio.css'

const CarouselInicio = ({cardsViews}) => {
  const {products, change, users, userByEmail,}=useContext(ContextApi);

  const carouselProduc= ()=>{
    
    let result= products.map((product)=>{
      let index = users.findIndex((index)=> index.email === userByEmail)
      product.producByEmail === userByEmail? product.iconFavoriteActive= false: product.iconFavoriteActive= true
      
    if(users[index].favoriteProducts !== [] ){ 
    if (users[index].favoriteProducts.some((favoriteproduct)=> favoriteproduct.id === product.id && favoriteproduct.producByEmail === product.producByEmail)){
      users[index].favoriteProducts?.map((favoriteproduct)=>{
        
        
        let index = products.findIndex((index)=> index.id=== favoriteproduct.id && index.producByEmail === favoriteproduct.producByEmail);
        products[index].filled=true  
      })
    }else{
      index = products.findIndex((index)=> index.id=== product.id && index.producByEmail === product.producByEmail);
      products[index].filled=false


    }}

    return product
  })
    return result
     
  }
  
  useEffect(()=>{
    
  },[change])
  
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
      {carouselProduc()?.map((product, index) =>  (

        <Cards 
          key={index} 
          img={product.img} 
          alt={product.category} 
          idProduct={product.id} 
          filled={product.filled}
          iconFavoriteActive={product.iconFavoriteActive}
          nameProduct={product.nameProduct}
          price={product.price}
          condition={product.condition}
          producByEmail={product.producByEmail}
          
        />
      ))}
      </Carousel>
  )
}

export default CarouselInicio