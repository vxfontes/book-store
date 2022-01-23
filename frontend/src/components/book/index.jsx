import React from "react";

// local
import styles from './styles';

const Book = ({ book }) => {
    return (
        <>
            <img className={styles().thumb} src={book.image} alt={book.title}/>
        </>
    );
}
 
export default Book;