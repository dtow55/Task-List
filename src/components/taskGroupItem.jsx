import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import GroupSvg from '../resources/Group.svg';
import { tasksComplete } from '../helpers'

const TaskListItem = ({ group, tasks, updateTasksToRender }) => {

  return (
    <ListGroupItem onClick={ () => {updateTasksToRender(group.taskIds)} }>
      <img src={GroupSvg}/> 
      {' ' + group.name} <br/> 
      <small>{tasksComplete(group, tasks)} of {group.taskIds.length} tasks complete</small>
    </ListGroupItem>
  );
}

export default TaskListItem;