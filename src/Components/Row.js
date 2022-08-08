import React,{useState,useEffect} from 'react';
import '../Styles/Row.css';
import { imgURL ,url} from '../Movieapi/urls';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title,isLarge,name}) {

    const [data,setData]=useState([]);
    const [vidUrl,setVidUrl]=useState("");

    const Fetch =async () => {

        fetch(`${url}${title}`)
            .then(res => res.json())
            .then(datas => {
                setData( datas.results);
                
                
            })
    }

    const click=(i)=>{
        if(vidUrl){
            setVidUrl('')
        }
        else{
            
            movieTrailer(i?.name || i?.title || i?.originame_name || "")
            .then((urls)=>{
                console.log(i)
                    const urlparams=new URLSearchParams(new URL(urls).search);
                    if(vidUrl){
                        setVidUrl("")
                    }
                    setVidUrl(urlparams.get("v"));
            }).catch(err=>console.log(err))
        }

    }
    
    useEffect(()=>{
        Fetch();
    },[title])

    const opt={
        height:"380",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }

  return (
    <>
    <div className="container-fluid row-main my-3">
    <h3 className="text-left my-2">{name}</h3>
        <div className="row_sub-main my-2">
            
            {data.map((i)=>
              
                <img onClick={()=>click(i)} src={`${imgURL}${i.poster_path}`} key={i.id} alt={i.name} className={isLarge?"row-posters-large":"row-posters"}/>   
            )}
        </div>
        
    </div>
    
       {vidUrl!==""? <YouTube opts={opt} videoId={vidUrl}/>:(<></>)}
   
    </>
  )
}

export default Row