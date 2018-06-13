// Returns task payload as an object with Task IDs as keys
// Assumption: Task IDs in task payload may not start at 1 or may not be continuous integers
export function indexTasks(taskPayload) {
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
export function getGroupsFromTasks(taskPayload) {
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

export function isComplete(task) {
  return !!task.completedAt;
}

// 'allTasks' must be in indexed form (as returned from indexTasks() above)
export function isLocked(task, allTasks) {
  let dependencyIds = task.dependencyIds;

  for (let i = 0; i < task.dependencyIds.length; i++) {
    if ( allTasks[dependencyIds[i]] && !allTasks[dependencyIds[i]].completedAt ) { // handles dependency IDs that have not been loaded
      return true;
    }
  }

  return false;
}

// Calculates number of completed tasks within a Task Group
export function tasksComplete(taskGroup, allTasks) {
  let completed = 0;

  taskGroup.taskIds.forEach((taskId) => {
    if ( allTasks[taskId].completedAt ) {
      completed++;
    }
  });

  return completed;
}
