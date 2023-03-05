import classes from "./posts-list.module.css";
import Post from "../post/post.jsx";
import NewPost from "../new-post/new-post.jsx";
import Modal from "../modal/modal.jsx";

function PostsList({isPosting, onStopPosting}) {
    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
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
