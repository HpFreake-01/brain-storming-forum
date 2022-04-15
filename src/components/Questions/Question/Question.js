import React from "react";
import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import style from './Question.module.css'

const Question = ({title,questionId, smallDescription, tag,time, createdBy, ...props}) =>{
    const deleteQuestion = () =>{
        props.deleteQuestion(questionId)
        console.log(questionId)
        window.location.reload();
    }
    return(
        <>
        <NavLink to={`/questions/${questionId}`} >
            <div className={style.question_item}>
                <Row className={style.question_wrapper}>
                    <div>
                        <nav className={style.question_title}>{title}</nav>
                        <nav className={style.question_description}>{smallDescription}</nav>
                    </div>
                    <hr/>
                    <div className={style.question_wrapper_bottom}>
                        <div className={style.question_bottom_left}>
                            <nav>
                                Posted by <span>{createdBy}</span>
                            </nav>
                            <nav>
                                {time} 
                            </nav>
                        </div>
                        <div className={style.question_bottom_right}>
                            <nav>0 answers</nav>
                            <nav className={style.tag}>{tag}</nav>
                        </div>
                    </div>
                </Row>
            </div> 
        </NavLink>
        <button onClick={deleteQuestion}>delete</button>
        </>
    );
}

export default Question;