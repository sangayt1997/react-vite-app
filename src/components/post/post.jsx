import classes from "./post.module.css";

function Post(props) {
    return (
        <div className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.title}>{props.title}</p>
        </div>
    )
}

export default Post;
