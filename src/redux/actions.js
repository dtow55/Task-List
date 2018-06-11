import { exampleTasks } from '../resources/examplePayload'
import { exampleGroups } from '../resources/examplePayload'

export function loadTasksAndGroups() {
  return (dispatch) => {
    return dispatch({ 
      type: 'LOAD_TASKS_AND_GROUPS', 
      tasks: exampleTasks, 
      groups: exampleGroups });
  };
}