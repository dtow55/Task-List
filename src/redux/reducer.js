export default function reducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_TASKS_AND_GROUPS':
      return {tasks: action.tasks, tasksToRender: action.tasksToRender, groups: action.groups};
    case 'UPDATE_TASKS_TO_RENDER':
      return Object.assign({}, state, {tasksToRender: action.tasksToRender});
    case 'TOGGLE_COMPLETE':
      let id = action.taskId;
      let updatedTask = {};

      if ( state.tasks[id].completedAt ) {
        updatedTask[id] = Object.assign({}, state.tasks[id], {completedAt: null});
      } else {
        updatedTask[id] = Object.assign({}, state.tasks[id], {completedAt: new Date().toString()});
      }

      return Object.assign({}, state, {tasks: Object.assign({}, state.tasks, updatedTask  )});
    default: 
      return state;
  }
}