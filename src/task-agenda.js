import React, {Component} from 'react';


import Task from './components/task-components/task';
import Welcome from './components/task-components/welcome';

class TaskAgenda extends Component {
  render() {
    return(
      <div>
        <Task />
        <Welcome />
      </div>
    );
  }
}

export default TaskAgenda;
