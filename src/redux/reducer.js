export default function reducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_TASKS_AND_GROUPS':
      return {tasks: action.tasks, groups: action.groups};
    default: 
      return state;
  }
}