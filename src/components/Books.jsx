// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
// import { useLoaderData } from "react-router-dom";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    // const books = useLoaderData();
    
    return (
        <div className="mt-10 md:mt-16">
            <h1 className="font-extrabold text-3xl text-center mb-10">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;