import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {PATH} from "./Routes";

function Header() {
    return (
        <nav className={s.headerNav}>
            <NavLink to={PATH.PRE_JUNIOR}
                     className={s.navLink}
                     activeClassName={s.active}>
                Pre-Junior
            </NavLink>

            <NavLink to={PATH.JUNIOR}
                     className={s.navLink}
                     activeClassName={s.active}>
                Junior
            </NavLink>

            <NavLink to={PATH.JUNIOR_PLUS}
                     className={s.navLink}
                     activeClassName={s.active}>
                Junior+
            </NavLink>
        </nav>
    )
}

export default Header
