import React from "react";
import classes from './new-post.module.css';
import Modal from "../../components/modal/modal.jsx";
import { Form, Link, redirect } from "react-router-dom";

function NewPost() {
    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required name="author"/>
                </p>
                <p>
                    <label htmlFor="title">Title</label>
                    <textarea id="title" required rows={3} name="title"/>
                </p>
                <p className={classes.actions}>
                    <Link type="button" to="..">Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); // {author: '...', title: '...'}
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return redirect('/');
}
