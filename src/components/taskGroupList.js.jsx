import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import GroupSvg from '../resources/Group.svg'

class TaskGroupList extends Component {
  render() {

    let groups = [];

    if (this.props.groups) {
      groups = this.props.groups.map((group, id) => {
        return (
          <ListGroupItem key={id}>
          <img src={GroupSvg} />
          {' ' + group.group}
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

export default TaskGroupList;