import React,{useContext} from 'react'
import ContextApi from '../../context/ContextApi';
import Form from "react-bootstrap/Form";
import '../../styles/private/selects.css'
const Selects = ({options,name, valueSelect}) => {
  const {change,setChange}=useContext(ContextApi);


  const changeSelect=(e)=>{
    e.preventDefault();
    valueSelect(e.target.value)
    setChange(!change)
  }

  return (
    <Form>
          <Form.Group className="mb-3">
          <Form.Label>{name}</Form.Label>
            <Form.Select
            onChange={changeSelect}
            >
              <option>Selecciones una {name}</option>
            {options?.map((option)=>(
              <option key={option} className='option-select' value={option}>{option}</option>
            ))}
            </Form.Select>
          </Form.Group>
        </Form>
  )
}

export default Selects