import PostsList from "../components/posts-list/posts-list.jsx";
import { Outlet } from "react-router-dom";

function Posts() {

    return (
        <>
            <Outlet />
            <main>
                <PostsList />
            </main>
        </>
    );
}

export default Posts;
