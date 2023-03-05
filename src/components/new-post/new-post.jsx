import React from "react";
import classes from './new-post.module.css';

function NewPost({onAuthorChange, onTitleChange, onCancel}) {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={onAuthorChange}/>
            </p>
            <p>
                <label htmlFor="title">Title</label>
                <textarea id="title" required rows={3} onChange={onTitleChange}/>
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;
