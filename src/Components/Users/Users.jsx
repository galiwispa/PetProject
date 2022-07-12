import React from "react";
import Paginator from "../common/Paginator/Paginator";
import classes from './Users.module.css';
import User from './User';

let Users = (props) => {
    return (
        <div className={classes.usersBlock}>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
            <div>
                {
                    props.users.map(u => <User key={u.id}
                        followingInProgress={props.followingInProgress}
                        user={u}
                        unfollow={props.unfollow}
                        follow={props.follow} />
                    )
                }
            </div>
        </div>
    )
}

export default Users;