import React from 'react'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import Question from './Question/Question';
import q from './Questions.module.css'

const Questions = ({questions, postedBy, smallDescription,userName, title, deleteQuestion, ...props}) => {

    return (
        <div className={q.container}>
            <div className={q.question_header}>
                <div className={q.link_to_all_questions}>ALL QUESTIONS</div>
                <div className={q.ask_question}>
                    <NavLink to='/ask-question'>ASK A QUESTION</NavLink>
                </div>
            </div>
            {
                questions.map(question => <Question key={question.id} 
                    title={question.question_title} 
                    questionId={question.id}
                    smallDescription={question.body_question} 
                    tag={question.tag}
                    time={question.created_at}
                    deleteQuestion={deleteQuestion}
                    createdBy={question.created_by}
                    />)
            }
            <div>
                <Paginator totalItemsCount={props.totalQuestionsCount} 
                pageSize={props.pageSize} 
                onPageChanged={props.onPageChanged} 
                currentPage={props.currentPage}/>
            </div>
        </div>
    )
}

export default Questions;