import React from 'react';
import { Col, Row } from 'react-bootstrap';
import title_img from '../../Images/about_title_img.png'; 
import a from './About.module.css'
import about_img from '../../Images/about_img.png';
import brain_img from '../../Images/brain_img.png';
import lock_img from '../../Images/lock_img.png';
import reminder_img from '../../Images/reminder_img.png';
import notes_img from '../../Images/notes_img.png';

const About = () => {
    return (
        <div className={a.container}>
            <Row>
                <Col className={a.title_img}>
                    <img alt="img" src={title_img} />
                </Col>
                <Col>
                    <nav className={a.first_block_title}>ABOUT US</nav>
                    <nav className={a.first_block_text}>We create our page to help people find more interesting ideas & ask questions about different themes</nav>
                    <nav className={a.first_block_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, neque, vitae, lorem arcu donec amet elementum augue. Justo libero cursus ullamcorper eget at sit ante.</nav>
                </Col>
            </Row>
            <Row className={a.items_container}>
                <Col>
                    <div className={a.item}>
                        <img src={notes_img} alt='img'/>
                        <nav className={a.item_title}>Write your opinion </nav>
                        <nav className={a.item_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,  tortor id lacus molestie. </nav>
                    </div>
                    <div className={a.item}>
                    <img src={reminder_img} alt='img'/>
                        <nav className={a.item_title}>Sorting by category </nav>
                        <nav className={a.item_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,  tortor id lacus molestie. </nav>
                    </div>
                </Col>
                <Col>
                    <div className={a.item3}>
                        <p>All the features <br/><span>you need -- in one place</span></p>
                    </div>
                    <div className={`${a.item} ${a.item_beetwen}`}>
                    <img src={brain_img} alt='img'/>
                        <nav className={a.item_title}>Create the best idea </nav>
                        <nav className={a.item_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu amet sem vitae consectetur adipiscing fermentum in vel. Tortor, nunc elit molestie amet. Pharetra proin bibendum.</nav>
                    </div>
                </Col>
                <Col>
                    <div className={a.item}>
                    <img src={about_img} alt='img'/>
                        <nav className={a.item_title}>Ask questions</nav>
                        <nav className={a.item_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,  tortor id lacus molestie. </nav>
                    </div>
                    <div className={a.item}>
                    <img src={lock_img} alt='img'/>
                        <nav className={a.item_title}>Support & security </nav>
                        <nav className={a.item_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,  tortor id lacus molestie. </nav>
                    </div>
                </Col>
                <Row className={a.third_block}>
                    <Col>
                        <nav className={a.mission_title}>Our main <span>mission</span> </nav>
                        <nav className={a.misssion_text}>“Idea generation is about quantity, not quality. Multiplication, not subtraction. Editing comes later. The goal of brainstorming is to walk out with buckets of ideas, not one precious idea perched on a pillow.”</nav>
                    </Col>
                    <Col className={a.title_img}>
                        <img alt="img" src={title_img} />
                    </Col>
                </Row>
            </Row>
        </div>
    )
}
export default About;
