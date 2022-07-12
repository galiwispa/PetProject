import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import { Formik, Form, Field } from 'formik';


const MyPosts = React.memo(props => {
    let postsElement =
        [...props.posts]
            .reverse()
            .map(p => < Post message={p.message} key={p.id} likeCounter={p.likesCount} />)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <AddNewPost addPost={props.addPost}/>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
});

const AddNewPost = (props) => {
    let addNewPost = (values) => {
        props.addPost(values);
    }

    return (
        <Formik
            initialValues={{
                newPostText: ''
            }}
            onSubmit={(values, { resetForm }) => {
                addNewPost(values.newPostText);
                resetForm({ values: '' });
            }}>
            {() => (
                <Form>
                    <div>
                        <Field as={'textarea'} name={'newPostText'} placeholder={'type here'} />
                    </div>
                    <button type={'submit'}> Add post</button>
                </Form>
            )}
        </Formik>
    )
}

export default MyPosts;