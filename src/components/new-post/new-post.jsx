import classes from './new-post.module.css';

function NewPost() {
    function changeTitleHandler(event) {
        console.log(event.target.value);
    }
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required />
            </p>
            <p>
                <label htmlFor="title">Title</label>
                <textarea id="title" required rows={3} onChange={changeTitleHandler}/>
            </p>
        </form>
    );
}

export default NewPost;
