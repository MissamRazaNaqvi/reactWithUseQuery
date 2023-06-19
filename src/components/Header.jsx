import React from 'react'
import { Link } from 'react-router-dom'
import style from '../assets/header.module.css'

export default function Header() {
    return (
        <ul className={style.navigation}>
            <li className={style.home}><Link to='/'>Home</Link></li>
            <li><Link to='/list'>List</Link></li>
        </ul>
    )
}
