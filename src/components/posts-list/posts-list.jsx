import { useState } from "react";
import classes from "./posts-list.module.css";
import Post from "../post/post.jsx";
import NewPost from "../new-post/new-post.jsx";

function PostsList() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('')

    function titleChangeHandle(event) {
        setEnteredTitle(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <NewPost onAuthorChange={authorChangeHandler} onTitleChange={titleChangeHandle}/>
            <ul className={classes.posts}>
                <Post author={enteredAuthor} title={enteredTitle}/>
                <Post author="Manual" title="React is Awesome with Vite!"/>
            </ul>
        </>
    )
}

export default PostsList;
