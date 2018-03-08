import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/auth_actions';
import Header from '../header';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return(
      <div>
        <Header />
        <div className="signout-text">
          Hope to see you again real soon!
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(Signout);
