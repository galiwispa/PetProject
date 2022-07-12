import React from "react";
import classes from './Paginator.module.css';

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i === 20) break;
    }

    return (
        <div className={classes.pages}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? classes.selectedPage : undefined}
                    onClick={(e) => {
                        props.onPageChanged(p);
                    }}>{p}</span>
            })}
        </div>
    )
}

export default Paginator;