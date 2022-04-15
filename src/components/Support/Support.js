import React from 'react';
import { Row } from 'react-bootstrap';
import style from './Support.module.css';


const Support = () => {
    return (
        <div className={style.main}>
            <div className={style.first_block}>
            <Row>
                <nav className={style.first_block_title}>
                    We give our<br/> customer <span>support</span>
                </nav>
            </Row>
            <Row>
                <nav className={style.first_block_text}>
                    Brain Storming takes security very seriously and has adopted industry best 
                    practices to ensure that our customer’s data stays safe.a is committed to 
                    the security of our products from the ground up. Security is crucial to our 
                    process from product development to deployment, and all our products and services 
                    are tested rigorously before hitting production. In order to ensure compliance with 
                    our strict security standards, we conduct regular security audits and vulnerability 
                    testing on our products and our hosting environments. Security is a major consideration
                    when designing, building, and supporting our application. From password encryption to 
                    the rendering of uploaded images, significant effort is put into outthinking malicious exploits.
                </nav>
            </Row>
        </div>
        <div className={style.second_block}>
            <Row>
                second_block
            </Row>
        </div>
        </div>
    )
}

export default Support;
