import React from 'react';
import './App.css';
import SwitchLanguage from './SwitchLanguage'
import {language} from './constDefault'
import { connect } from "react-redux"
import * as action from './store/actions/actions'
import Home from './components/Home/index.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  handleClick = (Lang)=> {
    if(language.EN === Lang){
      this.props.changeLanguageStart(language.EN)
    }else{
      this.props.changeLanguageStart(language.VI)
    }
  }

  render() {

    return (
      <div className="App">
       <nav style={{width: '100%', height: '50'}}>
          <button onClick={() => this.handleClick('vi')}>VIE</button>
          <button onClick={() => this.handleClick('en')} >ENG</button>
       </nav>

        <SwitchLanguage id='footer.homee.blog.element.R3'/>
        <br></br>
        <Home/>
      </div>
    ); 
  }
}


const mapStateToProps = (state) => {
  return { language: state.language }
}


const mapDispatchToProps = dispatch => {
  return {
    changeLanguageStart: (Lang) => dispatch(action.changeLanguageSuscess(Lang))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
