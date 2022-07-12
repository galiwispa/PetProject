import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img alt='userPhoto' src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="></img>
            {props.message}
            <div>
                <span>like </span> {props.likeCounter}
            </div>
        </div>

    );
}

export default Post;