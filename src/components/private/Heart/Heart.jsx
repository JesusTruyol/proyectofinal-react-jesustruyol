import {useContext} from 'react'
import ContextApi from '../../../context/ContextApiProider'

export default function Heart({filled, idProduct, producByEmail}) {
  const {products, setProducts, change,setChange, favoriteProducts, users, setUsers, setFavoriteProducts, userByEmail}= useContext(ContextApi)
  
  const changeHeart=(id, producByEmail)=>{
   
    let index = users.findIndex((index)=> index.email === userByEmail);

    if (!users[index].favoriteProducts.some((favoriteproduct)=> favoriteproduct.id === id && favoriteproduct.producByEmail === producByEmail)){
      users[index].favoriteProducts= [...users[index].favoriteProducts , {id,producByEmail}]
      setUsers(users)
      console.log(users)
      users[index].favoriteProducts.map((favoriteProduct)=>{
        console.log(favoriteProduct)
        let index = products.findIndex((index)=> index.id=== favoriteProduct.id && index.producByEmail === favoriteProduct.producByEmail);
        products[index].filled=true  
      })
    }else{
      users[index].favoriteProducts= users[index].favoriteProducts.filter((favoriteProduct)=> !(favoriteProduct.id === id && favoriteProduct.producByEmail === producByEmail));
      index = products.findIndex((index)=> index.id=== id && index.producByEmail === producByEmail);
      console.log(index)
      products[index].filled=false
      setUsers(users)
      console.log(users)
    }
     
    console.log('cambio')
    
    setChange(!change)
  
  }
  
  return (
    <>
    <button className='button-heart'
            onClick={()=> changeHeart(idProduct, producByEmail)}
          >          
      <svg width="24px"  viewBox="0 0 24 24">
        <path
          fill={filled ? "red" : "white"}
          stroke={filled ? "red" : "#355769"}
          strokeWidth="2.2"
          d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
        />
      </svg>
    </button>
    </>
  );
}
