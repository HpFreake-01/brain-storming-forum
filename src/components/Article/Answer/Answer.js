import React from "react";
import style from './Answer.module.css'

const Answer = ({likeCount, ...props}) =>{
    return (
        <div className={style.wrapper}>
            <div className={style.answerWrapper}>
            <div className={style.answerAbout}>
                    <div className={style.postedBy}>
                    <nav>{props.createdBy != null ? props.createdBy.username : 'User Name'}</nav>
                    </div>
                    <div className={style.tag}>
                        <nav>Some</nav>
                    </div>
                </div>
                <div>
                    {props.answer_description}
                </div>
                <div>
                    Like: - {likeCount} +
                </div>
            </div>
        </div>
    )
}

export default Answer;