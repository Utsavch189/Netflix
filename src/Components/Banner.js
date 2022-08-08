import React,{useState,useEffect} from 'react';
import '../Styles/Banner.css';
import { imgURL ,url} from '../Movieapi/urls';
import randomNumber from '../randomNumber';

function Banner({title}) {

    const [banner,setBanner]=useState([])
    const [random,setRandom]=useState(null);

    const Fetch =async () => {

        fetch(`${url}${title}`)
            .then(res => res.json())
            .then(datas => {
                setBanner(datas.results);
                
                setRandom(randomNumber(0,datas.results.length))
                
            })
    }
    useEffect(()=>{
        Fetch();
    },[title])

    const limit = (string, length, end = "...") => {
        return string.length < length ? string : string.substring(0, length) + end
    }
    
  return (
    <>
        <div className="container-fluid banner_main">
            {banner.length>0 ?(
                <>
                    <img src={`${imgURL}${banner[random].backdrop_path}`} alt="" className='banner_img'/>
                </>
            ):(<></>)}

            <div className="banner_contents ">
                <div className="banner_titles">
                    <h1 className="text-left">
                        {banner[random]?.title || banner[random]?.name || banner[random]?.original_name}
                    </h1>
                </div>
                <div className="banner_buttons my-4">
                    <button className='banner_buttons1'>Play</button>
                    <button className='banner_buttons2'>My List</button>
                </div>
                <div className="banner_description my-1">
                    <p>
                        {banner[random]?.overview.length? limit(banner[random]?.overview,150):(<></>)}
                    </p>
                </div>
            </div>
            
        </div>
      <div className="shadow"/>
        
    </>
  )
}

export default Banner;