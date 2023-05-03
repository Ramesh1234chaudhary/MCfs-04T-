
import './Sidebar.css'
import { Link, Outlet } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
        
        {/* // navbar section? */}
        <div className='mainHome'>
            {/* sidebarsection */}
            <div className="sidebar">
            {/* <Link to='/toprated'>Top Rated</Link> */}
                <Link to='/allmovies'>All Movies</Link>
                <Link to='/action'>Action</Link>
                <Link to='/comedy'>Comedy</Link>
                <Link to='/drama'>Drama</Link>
               
            </div >
            {/* bodysection */}
           
           <div className="body">
           <Outlet/>
           </div>
            
           
        </div>
        </>
    
    )
}

export default Sidebar;