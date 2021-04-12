import React, { useContext } from 'react'
import {MovieContext} from './MovieContext';
import './css/Nav.css'
const Nav = () => {
    const [movies, setmovies] = useContext(MovieContext);
    return (  
        <div className='nav'>
            <span className='title'>Nguyen Vu Nghiem</span>
            <span className='infor'>List of books: {movies.length}</span>
        </div>
    )
}
 
export default Nav;