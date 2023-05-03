import React from 'react'
 import {Link} from 'react-router-dom';
 import "./Header.scss";
 import { useContext } from 'react';
import { allContext } from './Context';
 import { useState } from 'react';
const Header = () => {
  const {toprated,setToprated}  = useContext(allContext);

      const [search,setSearch]=useState();


      const handler = (event) =>{
        event.preventDefault();
        const newfilter=toprated.filter((value)=>{
          return value.title.toLowerCase().includes(search.toLowerCase());
         }) ;
         setToprated(newfilter);



      }

  return (
    <div className='header'>
    <Link to="" >
      <div className='logo'>
        Movie App
      </div>
      </Link>
       
      <form onSubmit={handler}>
        <input type='text' placeholder='Search' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <button className='button2'  type='submit'>search</button>
       </form>
       
      <Link to="/" >
      <div className='movie'>
        Movie
      </div>
      </Link>
      <Link to="/" >
      <div className='tv shows'>
        Tv Shows
      </div>
      </Link>
      <Link to="/Sidebar" >
      <div className='watchlist'>
      watchlist

      </div>
      </Link>
    
       <div className='user-imag'>
         <img src='https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg?w=2000'/>
       </div>
    </div>
  )
} 

export default Header
