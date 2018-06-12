import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { isComplete, isLocked } from '../helpers';
import Completed from '../resources/Completed.svg'
import Locked from '../resources/Locked.svg'
import Incomplete from '../resources/Incomplete.svg'
import { toggleComplete } from '../redux/actions'
import { connect } from 'react-redux';

class TaskList extends Component {
  render() {

    let tasks = this.props.tasks;
    let tasksToRender = this.props.tasksToRender;
    let tasksHtml = [];

    if (tasks && tasksToRender) { // runs only when state has loaded
      for (let i = 0; i < tasksToRender.length; i++) {
        let taskId = tasksToRender[i];
        let task = tasks[taskId];

        if ( isComplete(task) ) { // if task is complete
          tasksHtml.push(
            <ListGroupItem key={taskId} onClick={() => {this.props.toggleComplete(taskId)}}>
              <img src={Completed}/> <s>{task.task}</s>
            </ListGroupItem>
          );
        } else if ( isLocked(task, tasks) ) { // if task is locked
          tasksHtml.push(
            <ListGroupItem key={taskId}>
              <img src={Locked}/> {task.task}
            </ListGroupItem>
          );
        } else { // if task is incomplete (but not locked)
          tasksHtml.push(
            <ListGroupItem key={taskId} onClick={() => {this.props.toggleComplete(taskId)}}>
              <img src={Incomplete}/> {task.task}
            </ListGroupItem>
          );
        }
      }
    }

    return (
      <ListGroup>
        {tasksHtml}
      </ListGroup>
    )
  }
}

export default connect(null, { toggleComplete })(TaskList);