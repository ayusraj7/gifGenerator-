
import axios from 'axios';
import React from 'react'
import {useState} from 'react';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

//const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
    // const API_key=CvcPW8gHk5hJsCCckkeB9a64aRT242v4;
    //we need to avoid this code be less as much as possible all the logical code not jsx code 
    // now we will make customhook 
    const[tag,setTag]=useState('car');
    
    


    //using useGif() hook

    // const API_KEY='CvcPW8gHk5hJsCCckkeB9a64aRT242v4';
    // const[loading,setLoading]=useState(false);
    // const[gif,setGif]=useState('');  
    // useEffect(()=>{
    //     fetchData();
    // },[])
    // async function fetchData(){
    //     setLoading(true);
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     // const output=await axios.get(url);
    //     // console.log(output);
    //     const data=await axios.get(url);
    //     const imageSource=data.data.data.images.downsized_large.url;
    //     setLoading(false);
    //     console.log(imageSource);
    //     setGif(imageSource);
    //     console.log(data);
    // }
    function changeHandler(event)
    {
        setTag(event.target.value);
       
    } 

    const {gif,loading,fetchData}=useGif(tag);
    
    
    function clickHandler()
    {
       fetchData();
       
    }
  return (
    <div className='h-auto w-1/2  flex flex-col items-center gap-y-5 mt-[15px] bg-blue-500  border border-black'>


        <h1 className='text-2xl underline uppercase font-bold '> Random {tag} </h1>

        {
            loading?(<Spinner/>):(<img src={gif} width="450" />)
        }
        
        <input type="text" className='text-center bg-white opacity-70 w-10/12 mb-[3px] py-2 text-lg  rounded-lg  ' onChange={changeHandler} value={tag}/>

        <button onClick={clickHandler} className='bg-white  mb-12 text-lg opacity-70 w-10/12 py-3 rounded-lg  px-4'>
            Generate
        </button>
    </div>
  )
}

export default Tag
