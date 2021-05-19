import React from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={style.nav}>
        <div className={style.item}>
            {/*<NavLink className={`${style.item} ${style.active}` } to="/profile">Profile</NavLink>*/}
            <NavLink activeClassName={style.active} to="/profile">Profile</NavLink>
        </div>
        <div className={style.item}>
            <NavLink activeClassName={style.active} to="/users">Users</NavLink>
        </div>
        <div className={style.item}>
            <NavLink activeClassName={style.active} to="/dialogs">Messages</NavLink>
        </div>
        <div className={style.item}>
            <a>News</a>
        </div>
        <div className={style.item}>
            <a>Music</a>
        </div>

        <div className={style.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;