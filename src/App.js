import React from 'react'
import Login from './Components/Login'
import './App.scss';
import {  Routes,Route ,Navigate} from 'react-router-dom';
import Header from './Components/Header';
import MovieDetails from './Components/MovieDetails';
import { useContext } from 'react';
import { allContext } from './Components/Context';
import Allmovies from './Components/sidebarmovie/Allmovies';
import Action from './Components/sidebarmovie/Action';
import Comedy from './Components/sidebarmovie/Comedy';
import Home from './Home';
import Sidebar from './Components/Sidebar';
import MovieListing from './Components/MovieListing';

const App = () => {
  const {islogedin}=useContext(allContext)
  return (
    <div  className='App'>
    {
islogedin ? <div> <Header/> 
 <div className='container'>
<Routes>
<Route path="/" element={<Sidebar/>}>
<Route path='/' element={<Home/>}/>
<Route path="/MovieDetails/:id" element={<MovieDetails/>}/>

<Route path="/allmovies" element={<Allmovies/>}/>
<Route path='/action' element={<Action/>}/>

<Route path='/comedy' element={<Comedy/>}/>

 
</Route>


</Routes> </div></div> :<Login/>

}
)

</div>

)
}
    
 
export default App
