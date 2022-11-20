import React,{useState, useEffect,useContext} from "react";
import ContextApi from '../../../context/ContextApiProider';
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { getCommunes, getProvinces, getRegions } from "dpacl";
import "./perfil.css";

const Perfil = () => {
  const {products, setProducts, change, setChange,users,setUsers, userByEmail, setUserByEmail}=useContext(ContextApi)

  



  const resultUserPerfil= users?.filter((user)=> user.email === userByEmail);
  const userPerfil= resultUserPerfil[0]

  const [nameUser, setNameUSer]= useState(userPerfil.nameUser);
  const [name, setName]= useState(userPerfil.name)
  const [region,setRegion]=useState(userPerfil.region)
  const [provincia,setProvincia]=useState(userPerfil.provincia)
  const [comuna,setComuna]=useState(userPerfil.comuna)
  const [email, setEmail]= useState(userPerfil.email)
  const [phono, setPhono]= useState(userPerfil.phono)
  const [description, setDescription]= useState(userPerfil.description)
  const [imgUser, setImgUser]= useState(userPerfil.imgUser) 

  const [regiones,setRegiones]=useState([])
  const [provincias,setProvincias]=useState([])
  const [comunas,setComunas]=useState([])

  
  const getUbicacion = () => {
    const getregiones = getRegions();
    const nameRegiones = getregiones
      ?.map((regionName) => regionName.name)
      .sort();
    setRegiones(nameRegiones);

    const selectIDRegione = getregiones
      ?.filter((regionName) => regionName.name === region)
      .map((region) => region.id);
  

    const getprovincias = getProvinces(selectIDRegione[0]);
    const nameProvincias = getprovincias
      ?.map((provinciaName) => provinciaName.name)
      .sort();
    setProvincias(nameProvincias);
    const selectIDProvincia = getprovincias
      ?.filter((provinciaName) => provinciaName.name === provincia)
      .map((provincia) => provincia.id);


    const getComunas = getCommunes(selectIDProvincia[0]);
    const nameComunas = getComunas?.map((comunaName) => comunaName.name).sort();
    setComunas(nameComunas);
  };

 
  
  const changeRegion = (value) => {
    setRegion(value);
    setProvincia("");
    setComuna("");
    setChange(!change)
  };
  const changeProvincia = (value) => {
    setProvincia(value)
    setComuna("");
    setChange(!change)
  };

  const changeImgUser= (event)=>{
    

      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = function(event) {
        let img = document.getElementById('img1');
        setImgUser(event.target.result);
      }
      reader.readAsDataURL(file);

    setChange(!change)
  }
  
  const updateUser= ()=>{
    
    if(email !== userByEmail){
      let resultProduct= products.map((product)=>{
        if(product.producByEmail === userByEmail) product.producByEmail= email
        return product
      })
      setProducts(resultProduct)
      
      
      setUserByEmail(email)
    }
    let resultUsers= users.map((user)=>{
      if(user.email === userByEmail){
        user.nameUser= nameUser;
        user.name= name;
        user.region= region;
        user.provincia= provincia;
        user.comuna= comuna;
        user.email= email;
        user.phono= phono;
        user.description= description;
        user.imgUser= imgUser
      } 
      return user
    })
    console.log(resultUsers)
    setUsers(resultUsers)
    setChange(!change)
    // setUsers()
  }


  useEffect(() => {
    getUbicacion();

    // eslint-disable-next-line
  }, [change]);
  
  return (
    <div className="container-main-perfil">
      <div className="container-perfil">
        <div className="container-form-perfil">

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Nombre de Usuario</Form.Label>
              <Form.Control
                className="form-control-perfil"
                type="text"
                placeholder="Ingresa tu nombre de Usuario"
                value={nameUser}
                onChange={(e)=> setNameUSer(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Nombre y Apellidos</Form.Label>
              <Form.Control
              className="form-control-perfil"
                type="text"
                placeholder="Ingresa tu nombre y apelidos"
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />
            </Form.Group> 

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Región</Form.Label>
              <Form.Select className="form-control-perfil"
              aria-label="Default select example"
              value={region}
              onChange={(e)=> changeRegion(e.target.value)}>
                <option>Selecciona una región</option>
                {regiones?.map((region, index)=>(
                  <option key={index} value={region}>{region}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Provincia</Form.Label>
              <Form.Select className="form-control-perfil"
              aria-label="Default select example"
              value={provincia}
              onChange={(e)=> changeProvincia(e.target.value)}
              >
                <option>Selecciona una provincia</option>
                {provincias?.map((provincia, index)=>(
                  <option key={index} value={provincia}>{provincia}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Comuna</Form.Label>
              <Form.Select className="form-control-perfil"
              aria-label="Default select example"
              value={comuna}
              onChange={(e)=> setComuna(e.target.value)}
              >
                <option>Selecciona una comuna</option>
                {comunas?.map((comuna, index)=>(
                  <option key={index} value={comuna}>{comuna}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Correo</Form.Label>
              <Form.Control className="form-control-perfil"
              type="email" 
              placeholder="Ingreesa tu correo" 
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Movil</Form.Label>
              <Form.Control 
              className="form-control-perfil"
                type="number"
                placeholder="Ingreesa tu numero de contacto"
                value= {phono}
                onChange={(e)=> setPhono(e.target.value)}

              />
            </Form.Group>

        </div>
        <div className="img-perfil">
          <h6>Imagen del perfil</h6>
          <div className="img">
            {imgUser? <img className="w-100" src={imgUser} alt="Imagen Perfil"/>:<></>}
          </div>

          <div className="subir-img">
            <p>Subir imagen</p>
            <input type="file" 
            onChange={(e)=> changeImgUser(e)}
            />
          </div>
        </div>
      </div>
    
      <Form.Group className="form-group-perfil descripcion">
        <Form.Label className="my-0 ms-3">Descripción de la Empresa</Form.Label>
        <Form.Control 
        as="textarea" rows={4}
        className="form-control-perfil-descripcion" 
        type="text" 
        placeholder="Ingresa tu descripción" 
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        />
      </Form.Group>
      <div className="btn-guardar-perfil">
      <Button onClick={()=> updateUser()}>Guardar</Button>
      </div>
      
    
    </div>
  );
};

export default Perfil;
