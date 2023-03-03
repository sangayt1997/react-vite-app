import classes from "./posts-list.module.css";
import Post from "../post/post.jsx";
import NewPost from "../new-post/new-post.jsx";

function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Maximilian" title="React is Awesome!" />
                <Post author="Manual" title="React is Awesome with Vite!" />
            </ul>
        </>
    )
}

export default PostsList;
