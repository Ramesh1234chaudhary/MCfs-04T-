import { createContext, useState} from "react";
import {useEffect } from 'react';
export const allContext =createContext();


function CustomProvider({children}){

    const [islogedin,setIslogedin]=useState(false);
    
    const [user,setUser]=useState({
        email:"",
        password:""
    });
   // https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1

    let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
    let base_url="https://api.themoviedb.org/3";
    let url=base_url+"/movie/top_rated?=popularity.desc"+API_key;
     let url2=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
    
     const [ApiData,SetApiData]=useState([]);
     const[toprated,setToprated]=useState([]);
     const[latest,setLatest]=useState([])
    const [set,setUrl]=useState(url);
      const [set2,setUrl2]=useState(url2);
      useEffect(()=>{
          fetch(url).then(res=>res.json()).then(data=>{
            setToprated(data.results);
             // console.log(data.results)
          });
      },[set])
  
      useEffect(()=>{
        fetch(url2).then(res=>res.json()).then(data=>{
            setLatest(data.results);
            console.log(data.results)
        });
    },[set2])

    return <allContext.Provider value={{ApiData, SetApiData,   latest,setLatest,  islogedin, setIslogedin,user,setUser,toprated,setToprated}}>
        {children}
    </allContext.Provider>
}
export  default  CustomProvider;
 