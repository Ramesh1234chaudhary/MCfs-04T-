
import axios from 'axios';
// import { FcRating } from "react-icons/fc";
import "../Sidebar.css"
import '../MovieList.css'


import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import { allContext } from "../Context";


import { useContext, useState ,useEffect} from 'react';

import { Link } from 'react-router-dom';
const Allmovies = () => {
    let img_path="https://image.tmdb.org/t/p/w500";

    
    const [search,setSearch]=useState('')
    // const [ApiData,SetApiData]=useState([])
    const {ApiData,SetApiData} =useContext(allContext)
    // const [search, setSearch] = useState("");
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  
    const url='https://api.themoviedb.org/3/movie/popular?api_key=242efbc4712f4c03c1e8c51afa2afe05&language=en-US&page=1';
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=242efbc4712f4c03c1e8c51afa2afe05&query=";
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
  console.log(getSearchedMovies);
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
{/* inputsection */}
<div >
<InputGroup className="mb-3 mt-50">
<Form.Control
onChange={(e) => setSearch(e.target.value)}
placeholder="Search"
aria-label="Search"
aria-describedby="basic-addon1"
className="inputwala"
value={search}
/>
</InputGroup>
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
export default Allmovies;
