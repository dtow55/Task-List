import { examplePayload } from '../resources/examplePayload';

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
// In a full version of this App, this would likely make a POST request to the backend to update the task status on the server
export function toggleComplete(taskId) {
  return (dispatch) => {
    return dispatch({
      type: 'TOGGLE_COMPLETE',
      taskId: taskId
    });
  };
}

// ***** HELPER FUNCTIONS *****

// Returns task payload as an object with Task IDs as keys
// Assumption: Task IDs in task payload may not start at 1 or may not be continuous integers
function indexTasks(taskPayload) {
  let indexedTasks = {};

  for (let i = 0; i < taskPayload.length; i++) {
    let taskId = taskPayload[i].id;

    indexedTasks[taskId] = taskPayload[i];
  }

  return indexedTasks;
}

// Returns array of unique Task Groups from task payload
// Task Group object model looks as follows:
// {
//  name: "Purchases"
//  taskIds: [1, 2, 3, 4, 5]
// }
function getGroupsFromTasks(taskPayload) {
  let groupsMap = new Map();
  let groupsArray = [];

  // Populate 'groups' Map with unique Task Group names
  for (let i = 0; i < taskPayload.length; i++) {
    let groupName = taskPayload[i].group;
    let taskId = taskPayload[i].id;

    if ( groupsMap.has(groupName) ) {
      groupsMap.get(groupName).push(taskId);
    } else {
      groupsMap.set(groupName, [taskId]);
    }
  }

  // Turn 'groups' Map into an array of objects and return
  groupsMap.forEach((value,key) => {
    groupsArray.push({name: key, taskIds: value});
  });

  return groupsArray;
}