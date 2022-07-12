import React from "react";
import { NavLink } from "react-router-dom";
import classes from './../Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <img alt='userPhoto' src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="></img>
            <NavLink to={'/dialogs/' + props.id} className={navData => navData.isActive ? classes.active : classes.dialog}> {props.name} </NavLink>

        </div>
    );
}

export default DialogItem;
