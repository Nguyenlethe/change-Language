import React from 'react';
import SwitchLanguage from '../../SwitchLanguage'
import { connect } from "react-redux"


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

 
  render() {

    return (
      <div className="Home.homee.content">
        <br></br>
  
        <SwitchLanguage id='nav.homee.blog.element.position.blog'/>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return { 
         
    }
}


const mapDispatchToProps = dispatch => {
    return {
   
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);