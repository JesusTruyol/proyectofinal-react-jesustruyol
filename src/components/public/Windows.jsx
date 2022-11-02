import React,{useState,useEffect,useContext, useLayoutEffect} from 'react'
import ContextApi from '../../context/ContextApi';

const Windows = () => {
  const {setCardViews}=useContext(ContextApi);
  const [changeView,setChangeView ]= useState(false)

  const windowsWhidthHeight=()=>{
    if (window.screen.width<540){
      setCardViews(1);
    }else if (window.screen.width>540 && window.screen.width<1040){
      setCardViews(2);
    }else if (window.screen.width>1040 && window.screen.width<1400){
      setCardViews(3);
    }else{
      setCardViews(4);
    }
 
    setChangeView(!changeView)
    console.log(window.screen.width)
  }

  useEffect(()=>{
    window.addEventListener('resize',windowsWhidthHeight())
    return(
      window.removeEventListener('resize',windowsWhidthHeight())
    )
  },[])


  return (
    <div></div>
  )
}

export default Windows