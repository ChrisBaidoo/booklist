import React, {useContext, useState} from 'react';
import {BookContext} from '../context/BookContext'


const BookForm = () => {
    const {addBook} = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, author)
        addBook(title, author)
        setTitle('')
        setAuthor('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="book title" 
            required onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" value={author} placeholder="author" 
            required onChange={(e)=>setAuthor(e.target.value)}/>
            <input type="submit" value="add book"/>
        </form>
     );
}
 
export default BookForm;