import React from "react"
import { connect } from "react-redux"
import Questions from '../components/Questions/Questions'
import { getQuestionThunkCreator, deleteQuestionThunkCreator } from "../store/reducers/questions-reducer"

class QuestionsContainer extends React.Component{
    componentDidMount(){
        this.props.getQuestionThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage) =>{
       this.props.getQuestionThunkCreator(currentPage, this.props.pageSize)
    }
    deleteQuestion = (id) =>{
        this.props.deleteQuestionThunkCreator(id);
    }

    render (){
        return(
            <>
            <div>
                {this.props.isFetching ? <div>load</div> : <Questions questions={this.props.questions}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalQuestionsCount={this.props.totalQuestionsCount}
                    deleteQuestion={this.deleteQuestion}
                    onPageChanged={this.onPageChanged}
                />}
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        questions: state.questionsPage.questions,
        currentPage: state.questionsPage.currentPage,
        totalQuestionsCount: state.questionsPage.totalQuestionsCount,
        pageSize: state.questionsPage.pageSize,
        isFetching: state.questionsPage.isFetching
    }
}

export default connect(mapStateToProps,{
    getQuestionThunkCreator,
    deleteQuestionThunkCreator
})(QuestionsContainer);

