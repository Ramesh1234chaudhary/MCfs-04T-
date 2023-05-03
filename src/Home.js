
import MovieListing from './Components/MovieListing'
import Popular from './Components/Popular'


const Home = () => {



  return (  
  <div>
    
    
    <div className='banner-img'>
        <h1 style={{color:"white", marginTop:"20px"}}>Top Rated</h1>
    </div>
    <MovieListing/>
    <div className='banner-img'>
        <h1 style={{color:"white", marginTop:"20px"}}>Popular Movie</h1>
    </div>

    <Popular/>
    </div>
  

  )
}

export default Home
 