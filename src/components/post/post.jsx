const name = ['Maximilian', 'Manual'];
function Post() {
    const chosenName = Math.random() > 0.5 ? name[0] : name[1];
    return (
        <div>
            <p>{chosenName}</p>
            <p>Learning React with vite!</p>
        </div>
    )
}

export default Post;
