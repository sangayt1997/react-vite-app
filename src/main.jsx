import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, { loader as postsLoader} from './routes/posts.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPost, {action as newPostAction} from "./routes/new-post/new-post.jsx";
import RootLayout from "./routes/root-layout.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Posts />,
                loader: postsLoader,
                children: [
                    {
                        path: '/create-post',
                        element: <NewPost />,
                        action: newPostAction
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
