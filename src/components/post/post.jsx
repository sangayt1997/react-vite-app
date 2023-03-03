const name = ['Maximilian', 'Manual'];
function Post(props) {
    const chosenName = Math.random() > 0.5 ? name[0] : name[1];
    return (
        <div>
            <p>{props.auther}</p>
            <p>{props.title}</p>
        </div>
    )
}

export default Post;
