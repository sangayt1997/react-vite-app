import classes from "./posts-list.module.css";
import Post from "../post/post.jsx";
import NewPost from "../new-post/new-post.jsx";
import Modal from "../modal/modal.jsx";
import { useState } from "react";

function PostsList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);

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
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal>
            )}
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
