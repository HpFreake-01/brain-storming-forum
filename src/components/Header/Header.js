import React from 'react'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import h from './Header.module.css'

const Header = () => {
    return (
        <Container>
            <div className={h.header}>
                <nav className={h.logo}>L</nav>
                <input type="text" placeholder="&#128270; Find out interesting information"/> 
                <nav>
                    <NavLink to='/home'>HOME</NavLink>
                    <NavLink to='/about'>ABOUT</NavLink>
                    <NavLink to='/support'>SUPPORT</NavLink>
                    <NavLink to='/questions'>QUESTIONS</NavLink>
                    <NavLink to='/tags'>TAGS</NavLink>
                    <NavLink className={h.login} to='/login'>LOG IN</NavLink>
                </nav>
            </div>
        </Container>
    )
}

export default Header;
