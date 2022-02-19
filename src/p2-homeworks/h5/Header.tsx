import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./ComponentsRoutes";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR}  className={({isActive}) =>  isActive ? s.active : 's.link'}> pre_junior</NavLink>
            <NavLink to={PATH.JUNIOR}  className={({isActive}) =>  isActive ? s.active : s.link} >junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) =>  isActive ? s.active : s.link} > junior+</NavLink>
        <div className={s.div}>

        </div>
        </div>
    )
}

export default Header
