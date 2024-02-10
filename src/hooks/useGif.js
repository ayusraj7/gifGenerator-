import React from 'react';

import {useState,useEffect} from 'react';
import axios from 'axios';
const API_KEY='CvcPW8gHk5hJsCCckkeB9a64aRT242v4';


const useGif = (tag) => {
    // const API_key=CvcPW8gHk5hJsCCckkeB9a64aRT242v4;
    
    console.log(tag);
    let tagname=tag;
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` ;
    // const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //const randomurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
    const[loading,setLoading]=useState(false);
    const[gif,setGif]=useState('');
   
    useEffect(()=>{
        fetchData('car');
    },[])
   
    async function fetchData(){
        setLoading(true);
        
        // const output=await axios.get(url);
        // console.log(output);
        //here we have to decide which you url we want that we know by tag variable  
        
        const data=await axios.get(tagname!==undefined? `${url}&tag=${tag}`:url);
        const imageSource=data.data.data.images.downsized_large.url;
        setLoading(false);
        console.log(imageSource);
        setGif(imageSource);
        console.log(data);

    }
    return {gif,loading,fetchData};
}

export default useGif