import React,{useState, useEffect,useContext} from 'react'
import ContextApi from '../../../context/ContextApiProider';
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modals from '../../../components/Modals'
import { render } from "@testing-library/react";
import Form from "react-bootstrap/Form";

const AddProducts = () => {

  const { idProduct, producByEmail } = useParams();
  console.log(idProduct)
  console.log(producByEmail)
  const {user,change, setChange, products, setProducts, userByEmail, categorys}= useContext(ContextApi)
  const nameCtegorias = categorys?.map((category) => category.category);
  const [category, setCategory] = useState("");
  const [nameProductAdd, setNameProductAdd] = useState("");
  const [condition, setCondition] = useState("");
  const [descriptionProductAdd, setDescriptionProductAdd] = useState("");
  const [priceProductAdd, setPriceProductAdd] = useState("");
  const [imgProductAdd, setImgProductAdd] = useState("");
  const [numberChange, setnumberChange]= useState(0)
  
  
  if(idProduct !== "null"){

    let index= products.findIndex((product)=> product.id === idProduct && product.producByEmail === producByEmail)
    let resultProduct = products[index]
    console.log(resultProduct)
    if(numberChange === 0){
      if(resultProduct.category !== category) setCategory(resultProduct.category);
      if(resultProduct.condition !== condition) setCondition(resultProduct.condition);
      if(resultProduct.nameProduct !== nameProductAdd) setNameProductAdd(resultProduct.nameProduct);
      if(resultProduct.description !== descriptionProductAdd) setDescriptionProductAdd(resultProduct.description);
      if(resultProduct.price !== priceProductAdd) setPriceProductAdd(resultProduct.price);
      if(resultProduct.img !== imgProductAdd) setImgProductAdd(resultProduct.img);
      setnumberChange(numberChange+1)
    }
  }

  const changeImgProductAdd= (event)=>{
    
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event) {
      let img = document.getElementById('img1');
      setImgProductAdd(event.target.result);
    }
    reader.readAsDataURL(file);

  setChange(!change)
}
const disabledButton=()=>{
  if(category && category && nameProductAdd && 
  descriptionProductAdd && priceProductAdd && 
  condition && imgProductAdd) return false
  return true
}

const addProducts=()=>{
  
  if(idProduct !== "null"){

    let index= products.findIndex((product)=> product.id === idProduct && product.producByEmail === producByEmail)
    let resultProduct = products[index]
  
    resultProduct.producByEmail= userByEmail;
    resultProduct.category= category;
    resultProduct.nameProduct= nameProductAdd;
    resultProduct.img= imgProductAdd;
    resultProduct.condition= condition;
    resultProduct.description= descriptionProductAdd;
    resultProduct.price= priceProductAdd;

    setCategory("");
    setCondition("");
    setNameProductAdd("");
    setDescriptionProductAdd("");
    setPriceProductAdd("");
    setImgProductAdd("");

    render(<Modals  title={"Información"}  text={'Producto Actualizado'}/>);
    window.history.back()
    return
  }
  
  if(! products.some((product)=> product.nameProduct === nameProductAdd)){
    let quantityProductByUser= products.filter((product)=> product.producByEmail === userByEmail).length
    console.log(quantityProductByUser)

    setProducts([...products,{
      id:quantityProductByUser.toString(),
      producByEmail:userByEmail,
      category:category,
      nameProduct:nameProductAdd,
      filled:false,    
      iconFavoriteActive:true,
      img:imgProductAdd,
      condition:condition,
      description:descriptionProductAdd,
      price:priceProductAdd
    }])

    setCategory("");
    setCondition("");
    setNameProductAdd("");
    setDescriptionProductAdd("");
    setPriceProductAdd("");
    setImgProductAdd("");

    
    render(<Modals  title={"Información"}  text={'Nuevo producto creado'}/>);
    window.history.back()
    return
  }
  
  render(<Modals  title={"Advertencia"}  text={'El nombre del producto ya existe'}/>); 
}
  
// 
useEffect(()=>{

},[change])

  return (
    <div className="container-main-perfil">
      <div className="container-perfil">
        <div className="container-form-perfil">

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-1">Nombre del Producto</Form.Label>
              <Form.Control
                className="form-control-perfil"
                type="text"
                placeholder="Ingresa tu nombre del Producto"
                value={nameProductAdd}
                onChange={(e)=>setNameProductAdd(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Categorías</Form.Label>
                <Form.Select
                className="form-control-perfil"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                >
                  <option>Selecciones una Categoría</option>
                {nameCtegorias?.map((option,index)=>(
                  <option key={index} className='option-select' value={option}>{option}</option>
                ))}
                </Form.Select>
            </Form.Group>

          <Form.Group className="form-group-perfil mb-3">
          <Form.Label className="my-0 me-2">Condición</Form.Label>
            <Form.Select
            className="form-control-perfil"
            value={condition}
            onChange={(e)=>setCondition(e.target.value)}
            >
              <option>Selecciones una Categoría</option>
              <option className='option-select' value="Nuevo">Nuevo</option>
              <option className='option-select' value="Usado">Usado</option>
            
            </Form.Select>
          </Form.Group>

            <Form.Group className="form-group-perfil mb-3">
              <Form.Label className="my-0 me-2">Precio del Producto</Form.Label>
              <Form.Control
              className="form-control-perfil"
                type="text"
                placeholder="Ingresa el precio del producto"
                value={priceProductAdd}
                onChange={(e)=>setPriceProductAdd(e.target.value)}
              />
            </Form.Group>

        </div>
        <div className="img-perfil">
          <h6>Imagen del Producto</h6>
          <div className="img">
            {imgProductAdd? <img className="w-100" src={imgProductAdd} alt="Img Product"/>:<></>}
          </div>
          <div className="subir-img">
            <p>Subir imagen del producto</p>
            <input type="file" onChange={(e)=> changeImgProductAdd(e)}/>
          </div>
        </div>
      </div>
    
      <Form.Group className="form-group-perfil descripcion">
        <Form.Label className="my-0 ms-3">Descripción del producto</Form.Label>
        <Form.Control 
        as="textarea" rows={4}
        className="form-control-perfil-descripcion" type="text" placeholder="Ingresa la descripción del producto" 
        value={descriptionProductAdd}
        onChange={(e)=>setDescriptionProductAdd(e.target.value)}
        />
      </Form.Group>
      <div className="btn-guardar-perfil">
      <Button 
      disabled={disabledButton()}
      onClick={()=> addProducts()}
      >Guardar</Button>
      </div>
      
    
    </div>
  )
}

export default AddProducts