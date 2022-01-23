import React, { useEffect, useState } from "react";
import { CircularProgress, Box } from '@mui/material';

// local
import api from '../../services/api';
import Book from "../../components/book";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            await api.get('/books/').then((response) => {
                if (response !== undefined) {
                    setBooks(response.data);
                } else {
                    alert("Error on data");
                }
            }).catch(error => {
                alert(error);
            });
        };
        fetchBooks();
        setLoading(true);
    }, []);


    return (
        <>
            {loading ? (
                <>
                    <p>{books.map((book) => (
                        <>
                            {/* <p>{book.title}</p>
                            <img src={book.image} width="100px" alt={book.title}/> */}
                            <Book book={book} />
                        </>
                    ))}</p>
                </>)
                : 
                (<>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                </>)}
        </>
    );
}

export default Home;