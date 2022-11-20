import React, { useState, useContext } from "react";
import ContextApi from "../../../context/ContextApiProider";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./searchBar.css";

const SearchBar = () => {
  const navigate= useNavigate()
  const {change, setChange, products,
          nameProductFilterSearch, setnameProductFilterSearch } = useContext(ContextApi);
  const [inputSearch, setInputSearch,]= useState("")
  const [productsFilter, setProductsFilter] = useState([]);
  const [resultSearch, setResultSearch]= useState("")
  
  const setInputForm = (value) => {
    console.log(value);
    setInputSearch(value);
    let result = products.filter((product) =>
      product.nameProduct.toUpperCase().includes(value.toUpperCase())
    );
    if(!value){ 
      result=[]
      setResultSearch('')
    }else{
      setResultSearch("result-search")
    }
    
    setProductsFilter(result);
  };

  const getOptionSearch=(product)=>{
    setInputForm('')
    setChange(!change)
    console.log(product.nameProduct)
    setnameProductFilterSearch(product)
    navigate(`/private/tienda/filtros/${product.category}`)
  }

  return (
    <div className="container-main-search">
      <div className="bg-img">
        <div className="img-under"></div>
      </div>
      <div className="bar-search">
        <InputGroup className="input-search">
          <Form.Control
            id="form-control-search"
            className="form-control-search"
            placeholder="Busca miles de productos por su nombre"
            value={inputSearch}
            onChange={(e) => setInputForm(e.target.value)}
          />
          {/* <Form.Control id="form-control-search" className='form-control-search'
          placeholder="Busca miles de productos por su nombre"
        /> */}
          <Button className="btn-search" id="button-addon2" 
          
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
        </InputGroup>
        {productsFilter ? 
          <div className={resultSearch}>
            {productsFilter?.map((product, index) => (
              <div key={index}>
                <h6 onClick={()=> getOptionSearch(product)}><strong>{product.category}</strong>/ {product.nameProduct}</h6>
                
              </div>
            ))}
          </div>
        : 
          <></>
        }
      </div>
    </div>
  );
};

export default SearchBar;
