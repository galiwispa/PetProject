import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Formik, Form, Field } from 'formik';



const Dialogs = (props) => {
    let state = props.messagesPage;

    let dialogsElements = state.dialogsData
        .map(d => < DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messagesData
        .map(m => <Message message={m.message} key={m.id} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm sendMessage={props.sendMessage} />
                </div>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    let addNewMessage = (values) => {
        props.sendMessage(values);
    }

    return (
        <Formik
            initialValues={{
                newMessageBody: ''
            }}
            onSubmit={(values, { resetForm }) => {
                addNewMessage(values.newMessageBody);
                resetForm({ values: '' });
            }}>
            {() => (
                <Form>
                    <div>
                        <Field type={'textarea'} name={'newMessageBody'} placeholder={'enter text'} />
                    </div>
                    <button type={'submit'}> Send</button>
                </Form>
            )}
        </Formik>
    )
}

export default Dialogs;
