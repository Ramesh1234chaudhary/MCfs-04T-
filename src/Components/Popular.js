import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { allContext } from './Context';
import './MovieList.css';

const Popular = () => {
    const {latest,setLatest}  = useContext(allContext);
    let img_path="https://image.tmdb.org/t/p/w500";

  return (
    <div className='movielist'>
    {
      (latest.length==0)?<p className='notfound'>Not Found</p>:latest.map((res,index)=>{
       return(
         <Link to={`/MovieDetails/${res.id}`}>
         <div className='main'>
          <img src={img_path+res.poster_path} className='poster'/>
           <h4 className='title'>{res.title}</h4>
           <h2 className='rating'>{res.vote_average}</h2>
          </div>
          </Link>
       )
      })
     }
    
 </div>
)
}


export default Popular;
