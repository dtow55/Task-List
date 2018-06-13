import { examplePayload } from '../resources/examplePayload'
import { getGroupsFromTasks, indexTasks } from '../helpers'

// Loads payload from local file, although would likely query a backend API in a full app
export function loadTasks() {
  let indexedTasks = indexTasks(examplePayload);

  return (dispatch) => {
    return dispatch({ 
      type: 'LOAD_TASKS_AND_GROUPS', 
      tasks: indexedTasks, 
      tasksToRender: Object.keys(indexedTasks), 
      groups: getGroupsFromTasks(examplePayload)
    });
  };
}

// When a Task Group is clicked, updates tasksToRender array in state to render only the 
// tasks which pertain to that Task Group
export function updateTasksToRender(tasksToRender) {
  return (dispatch) => {
    return dispatch({
      type: 'UPDATE_TASKS_TO_RENDER',
      tasksToRender: tasksToRender
    });
  };
}

// Toggles the completion status of a task when a complete or incomplete task is clicked
export function toggleComplete(taskId) {
  return (dispatch) => {
    return dispatch({
      type: 'TOGGLE_COMPLETE',
      taskId: taskId
    });
  };
}