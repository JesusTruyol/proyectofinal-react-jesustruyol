export function operador(operador,listProduct,id){
  const index= listProduct.findIndex((product)=> product.id===id)
  if(operador==='add'){
    listProduct[index].quantity++;
  }else if(operador==='subtract'){
    listProduct[index].quantity--;
  }else if(operador==='remove'){
    listProduct[index].quantity=0;
  }
  return(
    listProduct.filter((product) => product.quantity > 0)
    .reduce((total, product)=>  total + product.price *product.quantity ,0)
  )
}

export function upperCase(string){
  return (string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
  letter.toUpperCase()))

}