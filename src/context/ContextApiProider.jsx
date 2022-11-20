import { createContext,useState, useEffect} from "react"


const ContextApi = createContext({})


const ContextApiProvider = ({children}) => {
  

  const [auth, setAuth]= useState(false)
  const [key, setKey] = useState('inicio');
  const [userByEmail, setUserByEmail]= useState('')
  const [categorys,setCategorys]=useState([])
  const [products, setProducts]= useState([])
  const [favoriteProducts, setFavoriteProducts]= useState([])
  const [users, setUsers]= useState([])
  const [change,setChange]= useState(false)
  const [regiones,setRegiones]=useState([])
  const [provincias,setProvincias]=useState([])
  const [comunas,setComunas]=useState([])
  const [nameProductFilterSearch,setnameProductFilterSearch]= useState("")
  const [totalPrice, setTotalPrice]= useState('')
  const urlCategorys='./assets/json/categorias.json'
  const urlProducts= './assets/json/products.json'
  const urlUsers= './assets/json/users.json'

  const globalData={
    key, setKey,
    auth, setAuth,
    userByEmail, setUserByEmail,
    categorys,setCategorys,
    products, setProducts,
    favoriteProducts, setFavoriteProducts,
    users, setUsers, 
    change,setChange,
    regiones,setRegiones,
    provincias,setProvincias,
    comunas,setComunas,
    nameProductFilterSearch,setnameProductFilterSearch,
    totalPrice, setTotalPrice
   }

   const getDataApi= async ()=>{
    // Products
    let response= await fetch(urlProducts);
    let getdata= await response.json();
    console.log(getdata)
    setProducts(getdata)
    // Categorys
    response= await fetch(urlCategorys);
    getdata= await response.json();
    console.log(getdata)
    setCategorys(getdata)
    //Users
    response= await fetch(urlUsers);
    getdata= await response.json();
    console.log(getdata)

    setUsers(getdata)
    const emailusuarios= getdata.map((data)=>{
      console.log(data.email)
      return Object.fromEntries([[data.email,""]])
    })
    setFavoriteProducts(emailusuarios)
  }

  useEffect(()=>{
    getDataApi();
  },[])
  
  return (
    <ContextApi.Provider
      value={globalData}
    >
      {children}
    </ContextApi.Provider>
  )
}




export {ContextApiProvider};
export default ContextApi;