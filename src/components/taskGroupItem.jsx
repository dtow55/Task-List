import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import GroupSvg from '../resources/Group.svg';
import { taskGroupStatus } from '../helpers'

const TaskListItem = ({ group, tasks, updateTasksToRender }) => {

  return (
    <ListGroupItem onClick={ () => {updateTasksToRender(group.taskIds)} }>
      <img src={GroupSvg}/> 
      {' ' + group.name} <br/> 
      <small>{group.taskIds.length} tasks</small>
    </ListGroupItem>
  );
}

export default TaskListItem;