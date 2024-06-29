import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Main from './components/Main.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Books from './components/Books.jsx';
import BookDetails from './components/BookDetails.jsx';
// import BookDetails from './components/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/book',
        element: <Books/>,
        // loader: () => fetch('books.json'),
      },
      {
        path: '/bookdetails/:id',
        element: <BookDetails/>,
        // loader: ({params}) => fetch(`/books.json/${params.id}`),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
