# Task List
Task List is my solution to the Wonderschool React UI coding challenge (https://www.dropbox.com/sh/8icefhbj8w39t20/AAAIuaNcW-1yd_rS36JLmqqoa?dl=0).

## Installation
- Fork and clone
- Run 'npm install' to install package dependencies 
- Run 'npm start' to start the app on a local server. If a browser window doesn't open automatically, open a browser window and navigate to the address listed in the console

## Usage
- App initially loads displaying all Task Groups under the 'Task Group' heading, and all Tasks under the 'Things to Do' heading
- Click on a specific Task Group to display only the Tasks that pertain to that Task Group, or click 'All Groups' to show all Tasks
- Click on an incomplete Task to mark it complete (or vice versa)
- Locked Tasks cannot be marked complete until all dependent tasks are marked complete

## Notes
- I implemented the following case to the best of my judgment, but believe it warrants further consideration. The App currently allows Task B to remain marked as complete, although a case could be made to make it revert to locked status
  - Task A is marked complete, which causes Task B (previously locked) to become unlocked
  - Task B is marked as complete
  - Task A is subsequently changed from complete to incomplete
- I moved the "All Groups" link from the top right (based on example screenshot in DropBox) to the top of the 'Task Group' column because it seemed to make more sense
- The helpers.js file contains functions responsible for logic such as separating unique Task Groups from the supplied example payload (list of tasks); I would modify the API to provide this data so it doesn't have to be extracted from the list of tasks

