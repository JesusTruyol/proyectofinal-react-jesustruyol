import React,{useContext, useEffect} from "react";
import ContextApi from '../../context/ContextApi'
import SearchBar from "../../components/private/SearchBar";
import Form from "react-bootstrap/Form";
import { getCommunes, getProvinces, getRegions } from 'dpacl'
import "../../styles/private/tiendafiltros.css";

import Selects from "../../components/private/Selects";
import Cards from "../../components/private/Cards";

const TiendaFiltros = () => {
  const {
    categorias, 
    change, setChange,
    regiones,setRegiones,region,setRegion,setIdRegion,
    provincias,setProvincias,provincia,setProvincia,setIdProvincia,
    comunas,setComunas,setComuna}=useContext(ContextApi);

  const nameCtegorias = categorias?.map((categoria)=> categoria.categoria)
  const ordenar=['Precio Menor','Precio Mayor']

  const getUbicacion=()=>{

    const getregiones= getRegions();
    const nameRegiones= getregiones?.map((regionName)=> regionName.name).sort();
    setRegiones(nameRegiones)

    const selectIDRegione= getregiones?.filter((regionName)=>regionName.name=== region).map((region)=>region.id);
    setIdRegion(selectIDRegione);

    const getprovincias= getProvinces(selectIDRegione[0])
    const nameProvincias= getprovincias?.map((provinciaName)=> provinciaName.name).sort();
    setProvincias(nameProvincias);
    const selectIDProvincia= getprovincias?.filter((provinciaName)=>provinciaName.name=== provincia).map((provincia)=>provincia.id)
    setIdProvincia(selectIDProvincia)

    const getComunas= getCommunes(selectIDProvincia[0])
    const nameComunas= getComunas?.map((comunaName)=> comunaName.name).sort();
    setComunas(nameComunas)
    
  }
  


 

  useEffect(()=>{
    getUbicacion();
    
  // eslint-disable-next-line  
  },[change])

  return (
    <div className="container-main-private">
      
      <div className="container-left">
        <h3 className="title-filtros">Filtros</h3>
        <hr />
        <div className="filtros">
          <Selects options={nameCtegorias} name={'Categarías'} />
          <Selects options={ordenar} name={'Ordenar Por'}/>
          <Selects 
          options={regiones?regiones:[""]} 
          name={'Region'}
          valueSelect={setRegion}
          />
          <Selects 
          options={provincias?provincias:[""]} 
          name={'Provincia'}
          valueSelect={setProvincia}
          />
          <Selects 
          options={comunas?comunas:[""]} 
          name={'Comuna'}
          valueSelect={setComuna}
          />
          
          <Form.Check 
            type={'checkbox'}
            label={'Nuevo'}
          />

          <Form.Check 
            type={'checkbox'}
            label={'Usado'}
          />
        </div>
        
      </div>


      <div className="container-productos">

          <SearchBar />


        <div className="productos">
          {categorias?.map((categoria)=>(
            <Cards
            key={categoria.categoria}
            img={categoria.img}
            alt={categoria.categoria}
            id={categoria.name}
            filled={categoria.filled}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default TiendaFiltros;
