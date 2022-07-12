import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Bxe2zD6NESfM2nc_GjF2WECqbhv86tPZnA&usqp=CAU' alt='logo'></img> 
            <div className={classes.loginBlock}>
                { props.isAuth 
                ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                : <NavLink to='/login'>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;
