import React, {Component} from 'react'

import JavaScript from './skills/javascript';
import Html from './skills/html';
import ReactSkills from './skills/react_skills';
import SassSkills from './skills/sass_skills'

class Skills extends Component {

  constructor(props) {
    super( props )
    this.state = {
      showJS : true,
      showHTML : false,
      showREACT : false,
      showSASS : false
    };

    this.toggleDivJS = this.toggleDivJS.bind(this);
    this.toggleDivHTML = this.toggleDivHTML.bind(this);
    this.toggleDivREACT = this.toggleDivREACT.bind(this);
    this.toggleDivSASS = this.toggleDivSASS.bind(this);
  }

  toggleDivJS = () => {
    const { showJS } = this.state;
    this.setState( {
      showJS : true,
      showHTML : false,
      showREACT : false,
      showSASS : false
     } );
  }

  toggleDivHTML = () => {
    const { showHTML } = this.state;
    this.setState( {
      showJS : false,
      showHTML : true,
      showREACT : false,
      showSASS : false
    } );
  }

  toggleDivREACT = () => {
    const { showREACT } = this.state;
    this.setState( {
      showJS : false,
      showHTML : false,
      showREACT : true,
      showSASS : false
     } );
  }

  toggleDivSASS = () => {
    const { showSASS } = this.state;
    this.setState( {
      showJS : false,
      showHTML : false,
      showREACT : false,
      showSASS : true
    } );
  }

  render() {
    return(
      <div class="section-skills">
        <div class="row">

            <div class="col-1-of-2">
              <div>
                {this.state.showJS && <JavaScript />}
                {this.state.showHTML && <Html />}
                {this.state.showREACT && <ReactSkills />}
                {this.state.showSASS && <SassSkills />}
              </div>
            </div>

            <div class="col-1-of-2">
              <div class="skills__buttons">
                <div>
                  <button class="button" onClick={this.toggleDivJS}><h4>JavaScript</h4></button>
                </div>
                <div>
                  <button class="button" onClick={this.toggleDivHTML}><h4>HTML & CSS</h4></button>
                </div>
                <div>
                  <button class="button" onClick={this.toggleDivREACT}><h4>React & Redux</h4></button>
                </div>
                <div>
                  <button class="button" onClick={this.toggleDivSASS}><h4>SASS</h4></button>
                </div>
              </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Skills;
