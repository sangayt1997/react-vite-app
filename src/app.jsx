import { useState } from "react";
import PostsList from "./components/posts-list/posts-list.jsx";
import Header from "./components/header/header.jsx";

function App() {
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function showModalHandler() {
        setModalIsVisible(true);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    return (
        <>
            <Header onCreatePost={showModalHandler}/>
            <main>
                <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
            </main>
        </>
    );
}

export default App;
