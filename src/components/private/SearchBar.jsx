import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../styles/private/searchBar.css'
const SearchBar = () => {
  return (
  
      <div className="container-main-search">
        <div className="bg-img">
        <div className="img-under"></div>
        </div>
        <div className='bar-search'>
        <InputGroup className="input-search">
        <Form.Control className='form-control-search'
          placeholder="Busca miles de productos por su nombre"
        />
        <Button className="btn-search" id="button-addon2">
        <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
      </InputGroup>
        </div>
        
      </div>

  )
}

export default SearchBar