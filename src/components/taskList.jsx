import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TaskListItem from './taskListItem';

const TaskList = ({ tasks, tasksToRender, toggleComplete}) => {

  let taskItems = [];

  tasksToRender.forEach((i) => {
    taskItems.push(<TaskListItem task={tasks[i]} tasks={tasks} toggleComplete={toggleComplete} key={tasks[i].id}/>);
  });

  return (
    <ListGroup>
      {taskItems}
    </ListGroup>
  )
}

export default TaskList;