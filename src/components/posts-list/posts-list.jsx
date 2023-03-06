import classes from "./posts-list.module.css";
import Post from "../post/post.jsx";
import { useLoaderData } from "react-router-dom";

function PostsList() {
    // Cause infinite loops not good solution
    // fetch('http://localhost:8080/posts').then(response => response.json()).then(data => {
    //     setPosts(data.posts);
    // });
    const posts = useLoaderData();


    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, index) => <Post key={index} author={post.author} title={post.title}/>)}
                </ul>
            )}
            {posts.length === 0 && (
                <div className={classes['empty-post']}>
                    <h2>There is no posts yet.</h2>
                    <p>Start adding some post!</p>
                </div>
            )}
        </>
    )
}

export default PostsList;
