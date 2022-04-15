import React from 'react'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import f from '../Footer/Footer.module.css'
import instagram_img from '../../Images/instagram_img.png';
import twitter_img from '../../Images/twitter_img.png';
import facebook_img from '../../Images/facebook_img.png';

const Footer = () => {
    return (
        <Container>
            <div className={f.footer}>
            <nav className={f.footer_text}>Follow us</nav>
            <nav className={f.images}>
                <img alt='instagram' src={instagram_img}/>
                <img alt='twitter' src={twitter_img}/>
                <img alt='facebook' src={facebook_img}/>
            </nav>
            <nav className={f.links}>
                <NavLink to='/about'>ABOUT</NavLink>
                <NavLink to='/support'>SUPPORT</NavLink>
                <NavLink to='/questions'>QUESTIONS</NavLink>
                <NavLink to='/tags'>TAGS</NavLink>
            </nav>
        </div>
        </Container>
    )
}

export default Footer;
