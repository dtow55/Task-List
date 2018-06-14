import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import GroupSvg from '../resources/Group.svg';

const TaskListItem = ({ group, tasks, updateTasksToRender }) => {

  return (
    <ListGroupItem onClick={ () => {updateTasksToRender(group.taskIds)} }>
      <div>
        <img src={GroupSvg} class="check-box" alt=""/> 
        {' ' + group.name}
      </div>
      <div>
        <small class="gray">{tasksComplete(group, tasks)} of {group.taskIds.length} tasks complete</small>
      </div>
    </ListGroupItem>
  );
}

// ***** HELPER FUNCTIONS *****

// Calculates number of completed tasks within a Task Group
function tasksComplete(taskGroup, allTasks) {
  let completed = 0;

  taskGroup.taskIds.forEach((taskId) => {
    if ( allTasks[taskId].completedAt ) {
      completed++;
    }
  });

  return completed;
}

export default TaskListItem;