import React,{useState} from 'react';
import { useEffect } from 'react';
import '../Styles/Header.css';

function Header() {

    const [scroll,setScroll]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                setScroll(true);
            }
            else{
                setScroll(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll",window);
        };
    },[])

  return (
    <>
        <div className={scroll?"container-fluid header-main-scroll":"container-fluid header-main"}>
                <img src="http://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="" style={{"height":"40px","width":"120px","backgroundColor":"transparent"}} className='mx-2'/>
                <img src="https://tse4.mm.bing.net/th?id=OIP.M9sJUTCD2GNY_lmtj4iN4AHaHa&pid=Api&P=0" alt="" style={{"height":"30px","width":"40px"}}/>
        </div>
    </>
  )
}

export default Header