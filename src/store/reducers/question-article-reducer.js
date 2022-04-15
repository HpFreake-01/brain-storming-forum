import { questionsAPi } from "../../api/api";

const SET_QUESTION_ARTICLE = 'SET_QUESTION_ARTICLE';
const SET_QUESTION_ANSWERS = 'SET_QUESTION_ANSWERS';
const POST_ANSWER = 'POST_ANSWER';

let initialState = {
    article:[],
    answers:[]
}

const questionArticleReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_QUESTION_ARTICLE:
            return{
                ...state,
                article: action.payload
            }
        case SET_QUESTION_ANSWERS:
            return{
                ...state,
                answers: action.payload
            }
        case POST_ANSWER:
            return{
                ...state,
                answers:action.payload
            }
        default:
            return state;
    }
}

export const setQuestionArticle = (article) =>{
    return {type: SET_QUESTION_ARTICLE, payload: article}
}
export const setQuestionAnswers = (answers) =>{
    return {type: SET_QUESTION_ANSWERS, payload: answers}
}
export let postAnswerAction = (data) =>{
    return {
        type: POST_ANSWER, payload:data
    }
}

export const getQuestionArticle = (id) => (dispatch) =>{
    questionsAPi.getQuestionArticle(id)
        .then(data =>{
            dispatch(setQuestionArticle(data))
        })
}

export const getQuestionAnswers = (id) => (dispatch) =>{
    questionsAPi.getQuestionArticle(id)
        .then(data =>{
            dispatch(setQuestionAnswers(data.answers))
        })
}

export const postAnswerThunkCreator = (data, id) => (dispatch) =>{
    questionsAPi.postAnswer(data, id)
    .then(response =>{
        dispatch(postAnswerAction(data, id));
    })
    getQuestionAnswers()
}
export default questionArticleReducer;