import React, {useContext} from 'react';
import {BookContext} from '../context/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return ( 
        <div className="navbar">
            <h1>Chris' Reading List</h1>
            <p>You currently have {books.length} books to go through </p>

        </div>

     );
}
 
export default Navbar;