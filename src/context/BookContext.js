import React, {createContext, useState} from 'react';
import uuid from 'uuid/v4'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "Think and Grow Rich", author: "Napoleon Hill", id: 1,},
        {title: "The Talent Code", author: "John Caperman", id: 2,},
        {title: "Come back to me", author: "Macy Mackerel", id: 3,}
    ]);
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id:uuid()}])
    };
    
    const removeBook = (id) => {
         setBooks(books.filter(book =>  {
            return book.id !== id
        }))
    };

    return(
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;