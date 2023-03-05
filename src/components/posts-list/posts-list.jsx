import classes from "./posts-list.module.css";
import Post from "../post/post.jsx";
import NewPost from "../../routes/new-post/new-post.jsx";
import Modal from "../modal/modal.jsx";
import { useEffect, useState } from "react";

function PostsList() {
    // Cause infinite loops not good solution
    // fetch('http://localhost:8080/posts').then(response => response.json()).then(data => {
    //     setPosts(data.posts);
    // });
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, index) => <Post key={index} author={post.author} title={post.title}/>)}
                </ul>
            )}
            {!isFetching && posts.length === 0 && (
                <div className={classes['empty-post']}>
                    <h2>There is no posts yet.</h2>
                    <p>Start adding some post!</p>
                </div>
            )}
            {isFetching && (
                <div className={classes['empty-post']}>
                    <p>Loading...</p>
                </div>
            )}
        </>
    )
}

export default PostsList;
