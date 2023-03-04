import React from "react";
import classes from './new-post.module.css';

function NewPost(props) {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={props.onAuthorChange}/>
            </p>
            <p>
                <label htmlFor="title">Title</label>
                <textarea id="title" required rows={3} onChange={props.onTitleChange}/>
            </p>
        </form>
    );
}

export default NewPost;
