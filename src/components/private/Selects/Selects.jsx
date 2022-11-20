import React,{useContext} from 'react'
import ContextApi from '../../../context/ContextApiProider';
import Form from "react-bootstrap/Form";
import './selects.css'
const Selects = ({options,name, valueSelect, setvalueSelect}) => {
  const {change,setChange}= useContext(ContextApi);
  const changeSelect=(e)=>{
    e.preventDefault();
    setvalueSelect(e.target.value)
     setChange(!change)
  }

  return (
    <Form>
          <Form.Group className="mb-3">
          <Form.Label>{name}</Form.Label>
            <Form.Select
            value={valueSelect}
            onChange={()=>changeSelect}
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