import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import QuestionArticle from "../components/Article/QuestionArticle";
import {getQuestionArticle, getQuestionAnswers} from '../store/reducers/question-article-reducer'

class QuestinArticleContainer extends React.Component{
    componentDidMount(){
        let id = this.props.match.params.id
        this.props.getQuestionArticle(id);
        this.props.getQuestionAnswers(id);
    }
    render(){
        return(
            <>
            <QuestionArticle article={this.props.article} answers={this.props.answers}/>
            </>
        )
    }
}


let mapStateToProps = (state) =>{
    return{
        article: state.questionArticlePage.article,
        answers:state.questionArticlePage.answers
    }
}

export default compose(
    connect(mapStateToProps,{getQuestionArticle,getQuestionAnswers}),
    withRouter
    )(QuestinArticleContainer);