// import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const {bookName, author, image, review, rating, category, tags, bookId} = data;

    
    return (
        <div>
            <p>{id}</p>
            <p className="text-black text-9xl font-extrabold">{author}</p>
        </div>
    );
};

export default BookDetails;