import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Support from './components/Support/Support';
import Tags from './components/Tags/Tags';
import LogIn from './components/LogIn/LogIn';
import bg_img from './Images/Bg_img.png';
import Footer from './components/Footer/Footer';
import QuestionsContainer from './containers/QuestionsContainer';
import QuestinArticleContainer from './containers/QuestionArticleContainer';
import AskQuestion from './components/Questions/askQuestion/AskQuestion';


const App = () =>{
  return(
    <BrowserRouter>
      <div className='main' style ={{ backgroundImage: `url(${bg_img})`, backgroundRepeat: 'no-repeat', backgroundPosition:'right bottom',backgroundPositionX:'140px', backgroundPositionY:'2000px'}}>
          <Header/>
          <div>
            <Route path='/home' render={() => <Home/>}/>
            <Route path='/about' render={() => <About/>}/>
            <Route path='/support' render={() => <Support/>}/>
            <Route exact path='/questions/:id' render={() => <QuestinArticleContainer/>}/>
            <Route exact path='/questions' render={() => <QuestionsContainer/>}/>
            <Route path='/ask-question' render={() => <AskQuestion/>}/>
            <Route path='/tags' render={() => <Tags/>}/>
            <Route path='/login' render={() => <LogIn/>}/>
          </div>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App;
