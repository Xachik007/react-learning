import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnuZcD_PN3-chMmNIE6Fvo0SMCGCq_P1QagQ&usqp=CAU"
                alt=""/>
            {props.message}
            <div>
                <span>like  {props.likecount}</span>
            </div>
        </div>

    )
}

export default Post;


