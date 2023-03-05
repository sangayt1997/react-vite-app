import classes from "./posts-list.module.css";
import Post from "../post/post.jsx";
import NewPost from "../new-post/new-post.jsx";
import Modal from "../modal/modal.jsx";
import { useState } from "react";

function PostsList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);
    function addPostHandler(postData) {
        setPosts((existingPost) => [posts, ...existingPost]);
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
            <ul className={classes.posts}>
                <Post author="Manual" title="React is Awesome with Vite!"/>
            </ul>
        </>
    )
}

export default PostsList;
