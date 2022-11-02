
import React,{useContext, useEffect} from "react";
import ContextApi from "../../context/ContextApi";
import { useParams } from "react-router-dom";
import Heart from '../../components/private/Heart'
import Button from 'react-bootstrap/Button'
import "../../styles/private/detalle.css";
const Detalle = () => {
  // const {categorias, setCategorias, change, setChange}= useContext(ContextApi)
  const { id } = useParams();
  const {categorias, change,setChange}= useContext(ContextApi)
  let index = categorias.findIndex((index)=> index.name=== id);
  let categoriaFavorita= categorias;
  categoriaFavorita[index].filled= !categoriaFavorita[index].filled;

  useEffect(()=>{
    setChange(!change);
  },[change])
  return (
    <div className="container-main-private">
      
      <div className="img-detalle">
      <h5 onClick={()=>window.history.back()}><i className="fa-solid fa-chevron-left fa-xs"></i>Volver</h5>
        <img src={`https://source.unsplash.com/random/?${id}`} alt={id} />
      </div>
      <div className="description-detalle">
        <div className="description">
        <div className="producto-favorito">
          <h3>Nombre del Producto</h3>
          <div className='heart'>
          <Heart filled={categoriaFavorita[index].filled} id={id}/>
          </div>
        </div>
        
        <p>Precio del Producto</p>
        <p>Ubicación del producto</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          distinctio, voluptas, pariatur eius deleniti blanditiis beatae,
          reiciendis cumque non exercitationem vitae alias cum harum mollitia
          eaque illo dolore tenetur quam.
        </p>
        </div>
        <div className="vendedor-comprar">
          <p>Nombre Usuario del Vendedor</p>
          <Button>Comprar</Button>
        </div>
        
      </div>
    </div>
  );
};

export default Detalle;
