import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Completed from '../resources/Completed.svg';
import Locked from '../resources/Locked.svg';
import Incomplete from '../resources/Incomplete.svg';

const TaskListItem = ({ task, tasks, toggleComplete }) => {

  if ( isComplete(task) ) { // if task is complete, show Complete img

    return (
      <ListGroupItem onClick={() => {toggleComplete(task.id)}}>
        <img src={Completed} alt=""/> <s>{task.task}</s>
      </ListGroupItem>
    );

  } else if ( isLocked(task, tasks) ) { // if task is locked, show Locked img

    return (
      <ListGroupItem>
        <img src={Locked} alt=""/> {task.task}
      </ListGroupItem>
    );

  } else { // if task is incomplete (but not locked), show Incomplete img

    return (
      <ListGroupItem onClick={() => {toggleComplete(task.id)}}>
        <img src={Incomplete} alt=""/> {task.task}
      </ListGroupItem>
    );
  }
}

// ***** HELPER FUNCTIONS *****

function isComplete(task) {
  return !!task.completedAt;
}

// 'allTasks' must be in indexed form
function isLocked(task, allTasks) {
  let dependencyIds = task.dependencyIds;

  for (let i = 0; i < task.dependencyIds.length; i++) {
    if ( allTasks[dependencyIds[i]] && !allTasks[dependencyIds[i]].completedAt ) { // handles dependency IDs that have not been loaded
      return true;
    }
  }

  return false;
}

export default TaskListItem;