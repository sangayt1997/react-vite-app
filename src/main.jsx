import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './routes/posts.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPost from "./routes/new-post/new-post.jsx";
import RootLayout from "./routes/root-layout.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Posts />,
                children: [
                    {
                        path: '/create-post',
                        element: <NewPost />
                    }
                ]
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
