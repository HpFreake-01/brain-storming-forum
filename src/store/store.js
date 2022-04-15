import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import questionsReducer from "./reducers/questions-reducer";
import { reducer as formReducer } from 'redux-form'
import questionArticleReducer from "./reducers/question-article-reducer";

const reducers = combineReducers({
    questionsPage: questionsReducer,
    questionArticlePage: questionArticleReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;