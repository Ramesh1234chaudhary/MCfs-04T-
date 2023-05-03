import "../Sidebar.css"

import axios from 'axios';
import '../MovieList.css'

import { useContext, useState ,useEffect} from 'react';
import { allContext } from "../Context";

import { Link } from 'react-router-dom';
const Comedy = () => {
    let img_path="https://image.tmdb.org/t/p/w500";

    
    const [search,setSearch]=useState('')
    // const [ApiData,SetApiData]=useState([])
    const {ApiData,SetApiData} =useContext(allContext)
    // const [search, setSearch] = useState("");
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  
    const url='https://api.themoviedb.org/3/movie/popular?api_key=242efbc4712f4c03c1e8c51afa2afe05&language=en-US&page=55';
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const getAllMovies = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data.results);
      SetApiData(response.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };
  const getSearchedMovies = async () => {
    try {
      const response = await axios.get(SEARCHAPI + search);
      SetApiData(response.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(ApiData);
  useEffect(() => {
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);
  return (
    <div>
          <div >
   <div className="upper">
      <h1 style={{color:"white",textAlign:"start",marginLeft:"30px"}}>Comedy Categories</h1>
   </div>
{/* cardsection */}
<div className='movielist'>
       {
         (ApiData.length==0)?<p className='notfound'>Not Found</p>:ApiData.map((res,index)=>{
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

</div>
    </div>
  )
}
export default Comedy;