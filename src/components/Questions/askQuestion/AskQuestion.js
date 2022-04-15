import React from 'react'
import { connect } from 'react-redux';
import { reduxForm, Field} from 'redux-form'
import { postQuestionThunkCreator } from '../../../store/reducers/questions-reducer';

const AskQuestionForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Question'
                component='input'
                name='question_title'/>
            </div>
            <div>
                <Field placeholder='Question Description'
                component='input'
                name='body_question'/>
            </div>
            <div>
                <Field placeholder='Tag'
                component='input'
                name='tag'/>
            </div>
            <div>
                <button>Ask</button>
            </div>
        </form>
    )
}

const AskQuestionReduxForm = reduxForm({
    form: 'ask'
})(AskQuestionForm);

const AskQuestion = (props) => {
    const onSubmit = (formData) =>{
        //props.postQuestionThunkCreator(formData.question_title, formData.question_description, formData.user_first_name, formData.user_last_name)
        props.postQuestionThunkCreator(formData);
        window.location.reload();
        //console.log(formData.question_title, formData.question_description, formData.user_first_name, formData.user_last_name)
    }
    return (
        <>
            <h2>Ask</h2>
            <AskQuestionReduxForm onSubmit={onSubmit}/>
        </>
    )
}


export default connect(null, {postQuestionThunkCreator}
    )(AskQuestion);
