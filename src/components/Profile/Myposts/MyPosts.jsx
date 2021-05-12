import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} likecount={post.likecount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
       props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;


