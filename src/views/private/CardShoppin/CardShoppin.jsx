import { render } from "@testing-library/react";
import React, { useState, useContext, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import ContextApi from "../../../context/ContextApiProider";
import Modals from '../../../components/Modals'
import "./cardShoppin.css";

export default function TableProduct() {
  const { change, setChange, products, users,setUsers, userByEmail, totalPrice, setTotalPrice } = useContext(ContextApi);
  const [basketProduct, setBasketProduct] = useState(null);

  const quantytiProduct = (option, id, producByEmail) => {
    setTotalPrice(operador(option, id, producByEmail));
    setChange(!change);
  };

  const operador=(operador, id, producByEmail)=>{
    let indexUser = users.findIndex((index)=> index.email === userByEmail)
    let resultProduct= users[indexUser].shoppinProducts.filter((product) => product.id === id && product.producByEmail === producByEmail)
    
    console.log(resultProduct[0])
    
    if(operador==='add'){
      resultProduct[0].quantity++;
    }else if(operador==='subtract'){
      resultProduct[0].quantity--;
    }else if(operador==='remove'){
      
    }

  }
 
  const viewsCardShoppin= ()=>{
    let indexUser = users.findIndex((index)=> index.email === userByEmail)
    
    let productsFilter = products?.filter((product) =>{
        return users[indexUser].shoppinProducts.some((shoppinProduct)=> shoppinProduct.id === product.id && shoppinProduct.producByEmail === product.producByEmail)
    });

    let resultProductShoppin = productsFilter.map((productFilter)=> {
      let product= users[indexUser].shoppinProducts.some((shoppinProduct)=> shoppinProduct.id === productFilter.id && shoppinProduct.producByEmail === productFilter.producByEmail)
      let indexQuantity= users[indexUser].shoppinProducts.findIndex((index)=> index.id === productFilter.id && index.producByEmail === productFilter.producByEmail)
      if(product) return {...productFilter, quantity:users[indexUser].shoppinProducts[indexQuantity].quantity}
      })

      let totalPriceShoppin= resultProductShoppin.filter((product) => product.quantity > 0)
       .reduce((total, product)=>  total + product.price *product.quantity ,0)
    
    setTotalPrice(totalPriceShoppin.toLocaleString("es-CL"))
    setBasketProduct(resultProductShoppin);
  }

  const clearProduct = (id,producByEmail) => {
    console.log(userByEmail)
    console.log(users)
    let indexUser = users.findIndex((index)=> index.email === userByEmail)
    users[indexUser].shoppinProducts= users[indexUser].shoppinProducts.filter((shoppinProduct)=> shoppinProduct.id !== id && shoppinProduct.producByEmail !== producByEmail)
    console.log(users[indexUser])
    setUsers(users)
    setChange(!change);
    viewsCardShoppin();
    
  };


  useEffect(() => {
    viewsCardShoppin()
  }, [change]);

  
  return (
    <div className="table-main">
      <Table striped bordered hover>
        <tbody>
          {basketProduct?.map((product,index) => (
            
            <tr key={index}>
              <td className="data-table">
                <div className="description-table">
                  <div className="img-table mx-2">
                    <img className="w-100" src={product.img} alt={product.nameProduct}/>
                  </div>
                  <div className="table-name"><h4>{product.nameProduct}</h4></div>
                </div>
                <div className="operadores">
                  <div className="table-price mx-1 w-100">
                    $ {(product.quantity * product.price).toLocaleString("es-CL")}
                  </div>
                  <div className="d-flex mb-2">
                  <div
                    className={product.quantity === 1?"operador mx-1 subtract":"operador mx-1"}
                    onClick={() => quantytiProduct("subtract", product.id, product.producByEmail) }
                  >

                    🔽
                  </div>
                  <div className="table-quantyti mx-1">{product.quantity}</div>

                  <div
                    className="operador mx-1"
                    onClick={() => quantytiProduct("add", product.id, product.producByEmail)}
                  >
                    🔼
                  </div>
                  <div
                    className="operador mx-1"
                    onClick={() => 
                      clearProduct(product.id ,product.producByEmail)}
                  >
                    🗑️
                  </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div><h2>Total a pagar: ${totalPrice}</h2></div>
      <Button
      onClick={() =>render(<Modals title={"Información"}  text={'Aquí se debe redirigir al proceso de pago de los productos'}/>)}
      >
        Ir a pagar
      </Button>
    </div>
  )
}