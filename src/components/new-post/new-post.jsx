import React, { useState } from "react";
import classes from './new-post.module.css';

function NewPost({onCancel, onAddPost}) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('')

    function titleChangeHandle(event) {
        setEnteredTitle(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            author: enteredAuthor,
            title: enteredTitle
        }
        console.log(postData);
        onAddPost(postData);
        onCancel()
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler}/>
            </p>
            <p>
                <label htmlFor="title">Title</label>
                <textarea id="title" required rows={3} onChange={titleChangeHandle}/>
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;
