import React from "react";
import axios from "axios";
import React, { useEffect, useState } from "react";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const tagMemeurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const randomMemeurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif=(tag)=>{
    
    const[gif,setGif]=useState(' ');
    const[loading,setLoading]=useState('false');
    async function fetchData(tag){
        setLoading(true);
        
      const {data}=  await axios.get(tag? (tagMemeurl):(randomMemeurl));
     // console.log(output);
     const imageSource=data.data.images.downsized_large.url;
     //console.log(imageSource);
     setGif(imageSource);
     setLoading(false);
     
    }
    
       useEffect(()=>{
        fetchData('car');
    },[])
    
    return{gif,loading,fetchData}
}
export default useGif;