// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const BookDetails = () => {
    const { id } = useParams();


    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('/books.json')
            .then(res => res.json())
            .then(data => {
                const bookData = data.find((book) => book.bookId === parseInt(id));
                // console.log(data);
                setBook(bookData);
                setLoading(false)
            })
    }, [id])

    console.log(book);

    if (loading) return <p>loading....... </p>

    // const data = useLoaderData();
    // const {bookName, author, image, review, rating, category, tags, bookId} = data;


    return (
        <div>
            <header className="bg-white mt-10 md:mt-16">


                <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">{book.bookName}</h1>
                            <p className="mt-4 text-gray-600 dark:text-gray-300 pb-3 border-b-2">By: {book.author}</p>
                            <p className="mt-4 text-gray-600 dark:text-gray-300 pb-3 border-b-2">{book.category}</p>

                            <p className="mt-4 text-gray-600 dark:text-gray-300"><span className="text-black font-bold">Review: </span>{book.review}</p>
                            <div className=" mt-3 flex text-[#23BE0A] pb-3 border-b-2">
                                <span className="text-black font-bold flex items-center mr-4">Tags: </span>
                                {
                                    book.tags.map((tag, i) => (<li key={i} className="list-none mr-3 bg-[#23BE0A0D] p-1 rounded-lg"><span className="text-black"></span>#{tag}</li>))
                                }
                            </div>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">Number of Pages: <span className="text-black font-bold">   {book.totalPages}</span></p>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">Number of Pages: <span className="text-black font-bold">   {book.publisher}</span></p>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">Number of Pages: <span className="text-black font-bold">   {book.totalPages}</span></p>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">Number of Pages: <span className="text-black font-bold">   {book.rating}</span></p>

                            <div className="flex gap-4 mt-4">
                                <Link className="btn  font-semibold text-[#23BE0A]">Read</Link>
                                <Link className="btn text-white font-semibold bg-[#59C6D2] ">Wishlist</Link>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full max-w-2xl rounded-md" src={book.image} alt="glasses photo" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default BookDetails;