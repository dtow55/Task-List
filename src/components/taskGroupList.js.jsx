import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import GroupSvg from '../resources/Group.svg'
import { updateTasksToRender } from '../redux/actions'
import { connect } from 'react-redux';

class TaskGroupList extends Component {
  render() {

    let groups = [];

    if (this.props.groups) { // Attempt when groups prop has been loaded
      groups = this.props.groups.map((group, id) => {
        return (
          <ListGroupItem key={id} onClick={ () => {this.props.updateTasksToRender(group.taskIds)} }>
            <img src={GroupSvg} /> 
            {group.name} <br/> 
            <small>{group.taskIds.length} tasks</small>
          </ListGroupItem>
        )
      })
    }

    return (
      <ListGroup>
        {groups}
      </ListGroup>
    )
  }
}

export default connect(null, { updateTasksToRender })(TaskGroupList);