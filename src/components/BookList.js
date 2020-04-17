import React, {useContext} from 'react';
import {BookContext} from '../context/BookContext'
import BookDetails from './BookDetails'

const Booklist = () => {
    const {books} = useContext(BookContext);
    console.log(books)

    return books.length ? ( 
        <div className="book-list">
            <ul>
            {books.map(book => {
                return (<BookDetails book={book} key={book.id}/>)

            }
            )}
            </ul>


            
        </div>
     ) : (
         <div className="empty"> No books to read. You may chill :)</div>
     );
}
 
export default Booklist;