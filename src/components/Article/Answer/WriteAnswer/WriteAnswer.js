import React from 'react'
import { connect } from 'react-redux';
import { reduxForm, Field} from 'redux-form'
import { postAnswerThunkCreator } from './../../../../store/reducers/question-article-reducer'
import style from '../Answer.module.css'



const WriteAnswerForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.formWrapper}>
            <div className={style.inputWrapper}>
                <Field
                className={style.formInput}
                component='input'
                name='body_answer'/>
            </div>
            <div>
                <button className={style.button}>Send</button>
            </div>
        </form>
    )
}


const WriteAnswerReduxForm = reduxForm({
    form: 'write-answer'
})(WriteAnswerForm);

const WriteAnswer = (props) => {
    const onSubmit = (formData, articleId) =>{
        //{props.articleId} = articleId;
        props.postAnswerThunkCreator(formData, props.articleId);
        window.location.reload();
    }
    return (
        <>
        <hr className={style.hr}/>
        <WriteAnswerReduxForm onSubmit={onSubmit} articleId={props.articleId}/>
        </>
    )
}


export default connect(null, {postAnswerThunkCreator}
    )(WriteAnswer);