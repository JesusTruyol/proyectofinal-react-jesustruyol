import React, { useState, useContext, useEffect } from "react";
import ContextApi from "../../../context/ContextApiProider";
import { useParams } from "react-router-dom";
import SearchBar from "../../../components/private/SearchBar/SearchBar";
import Form from "react-bootstrap/Form";
import { getCommunes, getProvinces, getRegions } from "dpacl";
import "./tiendafiltros.css";

import Selects from "../../../components/private/Selects/Selects";
import Cards from "../../../components/private/Cards/Cards";

const TiendaFiltros = () => {
  const { idCategory } = useParams();

  const {
    categorys,
    products,
    users, userByEmail,
    change, setChange,
    regiones, setRegiones,
    provincias, setProvincias,
    comunas, setComunas,
    nameProductFilterSearch, setnameProductFilterSearch
  } = useContext(ContextApi);

  const [order, setOrder]= useState("")
  const [region,setRegion]= useState("")
  const [provincia,setProvincia]= useState("")
  const [comuna,setComuna]= useState("")
  const [category, setCategory] = useState(idCategory);
  const [checkUsado, setCheckUsado] = useState(false);
  const [checkNuevo, setCheckNuevo] = useState(false);
  const [resultFilter, setResultFilter]= useState([])
  const nameCtegorias = categorys?.map((category) => category.category);
  const ordenar = ["Precio Menor", "Precio Mayor"];
  
  const getUbicacion = () => {
    const getregiones = getRegions();
    const nameRegiones = getregiones?.map((regionName) => regionName.name).sort();
    setRegiones(nameRegiones);
    const selectIDRegione = getregiones?.filter((regionName) => regionName.name === region).map((region) => region.id);

    const getprovincias = getProvinces(selectIDRegione[0]);
    const nameProvincias = getprovincias?.map((provinciaName) => provinciaName.name).sort();
    setProvincias(nameProvincias);
    const selectIDProvincia = getprovincias?.filter((provinciaName) => provinciaName.name === provincia).map((provincia) => provincia.id);

    const getComunas = getCommunes(selectIDProvincia[0]);
    const nameComunas = getComunas?.map((comunaName) => comunaName.name).sort();
    setComunas(nameComunas);
  };
  
  let productFilter= nameProductFilterSearch
  const filters = () => {
    
     let result= products.filter(

      (product) =>
      {
        let index = users.findIndex((index)=> index.email === product.producByEmail);
        let user= users[index]

        user.email === userByEmail? product.iconFavoriteActive= false:product.iconFavoriteActive= true

        const validaciones = [];
        if (checkNuevo ^ checkUsado) validaciones.push(product.condition === (checkNuevo ? 'Nuevo' : 'Usado'))
        if (category) validaciones.push(product.category === category);
        if (region) validaciones.push(user.region === region);
        if (region && provincia !== "") validaciones.push(user.provincia === provincia);
        if (region && provincia &&  comuna !== "") validaciones.push(user.comuna === comuna);
        
        if(productFilter){

          validaciones.push(product.nameProduct === productFilter.nameProduct)
          if(product.nameProduct === productFilter.nameProduct){
            console.log(productFilter.nameProduct)
            if(productFilter.category !== category) setCategory(productFilter.category)
            
           
            let index = users.findIndex((index)=> index.email === productFilter.producByEmail);
            let user= users[index]
            if(user.region !== region ) setRegion(user.region);
            if(user.provincia !== provincia )setProvincia(user.provincia);
            if(user.comuna !== comuna ) setComuna(user.comuna);
                       
          }
        }
  
        return validaciones.every(value => value);
      }
    );
      if(order === "Precio Menor" ) result.sort((a,b) => a.price - b.price)
      if(order === "Precio Mayor" ) result.sort((a,b) => a.price - b.price).reverse()
    
      productFilter='';
      
      return result
      
  };

  const changeOrder=()=>{
    console.log('ordenar')
    setChange(!change)
  }
  const changeCategory = (value) => {
    setnameProductFilterSearch("")
    setRegion("")
    setProvincia("");
    setComuna("");
    setCategory(value)
    setChange(!change)
    console.log(category)

  };
  const changeRegion = (value) => {
    setRegion(value)
    setProvincia("");
    setComuna("");
    setChange(!change)
  };
  const changeProvincia = (value) => {
    setProvincia(value);
    setComuna("");
    setChange(!change)
  };
  const changeComuna = (value) =>{
    setComuna(value);
    setChange(!change)
  }

  const changeNuevo = () => {
    setCheckNuevo(!checkNuevo);
    setChange(!change)
  };

  const changeUsado = () => {
    setCheckUsado(!checkUsado);
    setChange(!change)
  };

  useEffect(() => {
    getUbicacion();
    
    filters();
    // eslint-disable-next-line
  }, [change]);

  return (
    <div className="container-main-private">
      <div className="container-left">
        <h3 className="title-filtros">Filtros</h3>
        <hr />
        <div className="filtros">
        <Form.Group className="mb-3">
          <Form.Label>Categorías</Form.Label>
            <Form.Select
            value={category}
            onChange={(e)=>changeCategory(e.target.value)}
            >
              <option>Selecciones una Categoría</option>
            {nameCtegorias?.map((option,index)=>(
              <option key={index} className='option-select' value={option}>{option}</option>
            ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label>Ordenar Por</Form.Label>
            <Form.Select
            value={order}
            onChange={(e)=>setOrder(e.target.value)}
            >
              <option>Selecciones un Orden</option>
            {ordenar?.map((option,index)=>(
              <option key={index} className='option-select' value={option}>{option}</option>
            ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label>Region</Form.Label>
            <Form.Select
            value={region}
            onChange={(e)=>changeRegion(e.target.value)}
            >
              <option>Selecciones una Region</option>
            {regiones?.map((option,index)=>(
              <option key={index} className='option-select' value={option}>{option}</option>
            ))}
            </Form.Select>
          </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Provincia</Form.Label>
            <Form.Select
            value={provincia}
            onChange={(e)=>changeProvincia(e.target.value)}
            >
              <option>Selecciones una Provincia</option>
            {provincias?.map((option,index)=>(
              <option key={index} className='option-select' value={option}>{option}</option>
            ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label>Comuna</Form.Label>
            <Form.Select
            value={comuna}
            onChange={(e)=>changeComuna(e.target.value)}
            >
              <option>Selecciones una Comuna</option>
            {comunas?.map((option,index)=>(
              <option key={index} className='option-select' value={option}>{option}</option>
            ))}
            </Form.Select>
          </Form.Group>

          <Form.Check
            type={"checkbox"}
            label={"Nuevo"}
            onChange={() => changeNuevo()}
          />

          <Form.Check
            type={"checkbox"}
            label={"Usado"}
            onChange={() => changeUsado()}
          />
        </div>
      </div>

      <div className="container-productos">
        <SearchBar />

        <div className="productos">
          {filters()?.map((product, index) => (

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
        </div>
      </div>
    </div>
  );
};

export default TiendaFiltros;
