import React from "react";
import style from "./users.module.css";
import userPhote from "../../assets/images/pngtree-user-vector-avatar-png-image_1541962.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage == p && style.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}
                    > {p} </span>
                })
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small === null ? userPhote : u.photos.small} className={style.usersPhote} alt=""/>
                        </NavLink>
                        </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}> follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div> {u.status} </div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;