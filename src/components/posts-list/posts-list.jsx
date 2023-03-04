import { useState } from "react";
import classes from "./posts-list.module.css";
import Post from "../post/post.jsx";
import NewPost from "../new-post/new-post.jsx";
import Modal from "../modal/modal.jsx";

function PostsList() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('')

    function titleChangeHandle(event) {
        setEnteredTitle(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
    }

   /* let modalContent;

    if (modalIsVisible) {
        modalContent = (
            <Modal onClose={hideModalHandler}>
                <NewPost
                    onAuthorChange={authorChangeHandler}
                    onTitleChange={titleChangeHandle}
                />
            </Modal>
        );
    }
*/
    return (
        <>
            {modalIsVisible && (
                <Modal onClose={hideModalHandler}>
                    <NewPost
                        onAuthorChange={authorChangeHandler}
                        onTitleChange={titleChangeHandle}
                    />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} title={enteredTitle}/>
                <Post author="Manual" title="React is Awesome with Vite!"/>
            </ul>
        </>
    )
}

export default PostsList;
