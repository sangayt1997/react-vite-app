import classes from "./post.module.css";
import { Link } from "react-router-dom";

function Post({id, author, title}) {
    return (
        <li className={classes.post}>
           <Link to={id}>
               <p className={classes.author}>{author}</p>
               <p className={classes.title}>{title}</p>
           </Link>
        </li>
    )
}

export default Post;
