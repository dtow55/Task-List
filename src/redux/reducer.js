export default function reducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_TASKS_AND_GROUPS':
      return {tasks: action.tasks, tasksToRender: action.tasksToRender, groups: action.groups};
    case 'UPDATE_TASKS_TO_RENDER':
      return Object.assign({}, state, {tasksToRender: action.tasksToRender});
    case 'TOGGLE_COMPLETE':
      let id = action.taskId;
      let newState = Object.assign({}, state);
      let newTask = {};
      if ( state.tasks[id].completedAt ) {
        newTask[id] = Object.assign({}, newState.tasks[id], {completedAt: null});
      } else {
        newTask[id] = Object.assign({}, newState.tasks[id], {completedAt: new Date().toString()});
      }
      newState.tasks = Object.assign({}, newState.tasks, newTask);
      return newState;
    default: 
      return state;
  }
}