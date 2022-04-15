import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import header_img from '../../Images/Header_img.png';
import search_img from '../../Images/Search_img.png'
import home_img from '../../Images/Home_img.png';
import h from './Home.module.css'

const Home = () => {
    return (
        <Container>
            <Row>
                <Col className={h.left_item}>
                    <nav className={h.left_item_title}>BRAIN STORMING</nav>
                    <nav className={h.left_item_text}>We are strong together,<br/> because our brain is much<br/> more than part of the body</nav>
                    <button>Search</button>
                </Col>
                <Col className={h.right_item}>
                    <img alt='background' src={header_img}/>
                </Col>
            </Row>
            <Row className={h.second_block_title}>INCREASE YOUR AWARENESS</Row>
            <Row>
                <div className={h.flex}>
                    <div>
                        <img className={h.search_img} alt='search' src={search_img}/>
                    </div>
                    <div className={h.left_sec}>
                        You can start your searching right now, only one step to find out more  
                    </div>
                </div>
            </Row>
            <Row>
                <div>
                    <input className={h.second_block_input} placeholder='Search the topic'/>
                </div>
            </Row>
            <div className={h.third_block}>
                <nav className={h.third_block_title}>Welcome to <span>BRAIN STORMING</span></nav>
                <div className={h.third_block_description}>
                    <nav className={h.third_block_img}>
                        <img alt='home_img' src={home_img}/>
                    </nav>
                    <nav className={h.third_block_description_title}>Subscribe to our newsletter</nav>
                    <nav className={h.third_block_description_text}>Lorem ipsum dolor sit amet, consecteturjimar adipiscing elit. Vestibulum, vitae sed  proin fermentum, a posuere laoreet Sodales sollicitudin morbi porttitor umarstav</nav>
                    <div className={h.third_block_input}>
                        <span>Subscribe</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Home;
