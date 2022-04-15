import React from "react";
import Answer from "./Answer/Answer";
import WriteAnswer from "./Answer/WriteAnswer/WriteAnswer";
import style from './questionArticle.module.css'

const QuestionArticle = ({article, answers}) =>{
    return(
        <div className={style.wrapper}>
            <div className={style.articleWrapper}>
                <div>
                    <nav className={style.questionTitle}>
                        {article.question_title}
                    </nav>
                </div>
                <div className={style.questionAbout}>
                    <div className={style.postedBy}>
                        <nav>{article.createdBy != null ? article.createdBy.username : 'User Name'}</nav>
                    </div>
                    <div className={style.tag}>
                        <nav>{article.tag}</nav>
                    </div>
                </div>
                <div className={style.description}>
                    {article.body_question}
                </div>
            </div>
            <div>
                {answers.map( answer => <Answer key={answer.id} id={answer.id} answer_description={answer.body_answer} likeCount={answer.correctness_answer_count}/>)}
            </div>
            <div>
                <WriteAnswer articleId={article.id}/>
            </div>
            
        </div>
    )
}

export default QuestionArticle;