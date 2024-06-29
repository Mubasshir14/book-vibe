import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const { bookName, author, image, review, rating, category, tags, bookId } = book;

    return (
        <Link to={`/bookdetails/${bookId}`}>
            <div className="w-full  overflow-hidden bg-white rounded-xl shadow-lg dark:bg-gray-800 p-5 border-2 border-gray-300">
                <img className="object-cover rounded-2xl w-full h-[230px]" src={image} alt="avatar" />
                <div className=" mt-3 flex text-[#23BE0A] ">
                    {
                        tags.map((tag , i) => (<li key={i} className="list-none mr-3 bg-[#23BE0A0D] p-1 rounded-lg">{tag}</li>))
                    }
                </div>

                <div className="py-5 border-b-2 border-dashed ">
                    <p href="#" className="block text-xl font-bold text-[#131313]" role="link">{bookName}</p>
                    <span className="text-sm text-[#131313CC] dark:text-gray-200">By: {author}</span>
                </div>
                <div className=" mt-2 flex items-center justify-between">
                    <p href="#" className="block text-lg font-bold text-[#131313CC]" role="link">{category}</p>
                    <span className="text-lg text-[#131313CC] flex items-center justify-center gap-1">{rating} <CiStar /> </span>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;