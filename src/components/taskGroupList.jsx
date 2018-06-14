import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TaskGroupItem from './taskGroupItem';

const TaskGroupList = ({ groups, tasks, updateTasksToRender }) => {

  let groupItems = groups.map((group, id) => {
    return (
      <TaskGroupItem
        group={group}
        tasks={tasks}
        updateTasksToRender={updateTasksToRender}
        key={id}
      />
    );
  });

  return (
    <ListGroup>
      {groupItems}
    </ListGroup>
  );
}

export default TaskGroupList;