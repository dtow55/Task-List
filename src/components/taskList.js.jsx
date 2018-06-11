import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'

class TaskList extends Component {
  render() {

    let tasks = [];

    if (this.props.tasks) {
      tasks = this.props.tasks.map((task, id) => {
        return (
          <ListGroupItem key={id}>
            {task.task}
          </ListGroupItem>
        )
      });
    }

    return (
      <ListGroup>
        {tasks}
      </ListGroup>
    )
  }
}

export default TaskList;