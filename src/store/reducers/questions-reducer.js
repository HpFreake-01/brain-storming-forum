import { questionsAPi } from "../../api/api";

const SET_QUESTIONS = 'SET_QUESTIONS';
const SET_TOTAL_QUESTIONS_COUNT = 'SET_TOTAL_QUESTION_COUNT';
const SET_TOGGLE_IS_FETCHING = 'SET_TOGGLE_IS_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const POST_QUESTION = 'POST_QUESTION';
const DELETE_QUESTION = 'DELETE_QUESTION';

let initialState = {
    questions:[],
    pageSize: 20,
    totalQuestionsCount:0,
    currentPage:1,
    isFetching: false
}


const questionsReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_QUESTIONS:
            return{
                ...state,
                questions:[...action.payload]
            }
            case SET_TOTAL_QUESTIONS_COUNT:
                return{
                ...state,
                totalQuestionsCount: action.payload
            }
        case SET_TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.currentPage
            }
        case POST_QUESTION:
            return{
                ...state,
                questions:action.data
            }
        case DELETE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(question => question !== action.payload)
            };
        default: 
            return state;
    }
}

export let setQuestions = (questions) =>{
    return{
        type:SET_QUESTIONS, payload:questions
    }
} 

export let toggleIsFetching = (isFetching) =>{
    return{
        type: SET_TOGGLE_IS_FETCHING, isFetching
    }
}
export let setCurrentPage = (currentPage) =>{
    return{
        type: SET_CURRENT_PAGE, currentPage
    }
}
export let setTotalQuestionsCount = (totalCount) =>{
    return{
        type: SET_TOTAL_QUESTIONS_COUNT, payload: totalCount
    }
}

export let postQuestionAction = (data) =>{
    return {
        type: POST_QUESTION, payload:data
    }
}
export let deleteQuestonAction = (id) =>{
    return{
        type: DELETE_QUESTION, payload: id
    }
}

export const getQuestionThunkCreator = (currentPage, pageSize) => {
    return (dispatch) =>{
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
            questionsAPi.getQuestions(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setQuestions(data.items)); 
                dispatch(setTotalQuestionsCount(data._meta.totalCount));
        });
    }
}
export const postQuestionThunkCreator = (data) => (dispatch) =>{
    questionsAPi.postQuestion(data)
    .then(response =>{
        dispatch(postQuestionAction(data));
    })
    getQuestionThunkCreator()
}

export const deleteQuestionThunkCreator = (id) => (dispatch) =>{
    questionsAPi.deleteQuestion(id)
        .then(response =>{
            dispatch(deleteQuestonAction(id));
        })
        getQuestionThunkCreator();
    }
export default questionsReducer;

