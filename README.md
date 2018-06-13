## Installation
- Fork and clone
- Run 'npm install' to install package dependencies 
- Run 'npm start' to start the app on a local server. This should automatically open a browser window to 'localhost:3000'

## Usage
- App initially loads displaying all Task Groups under the 'Task Group' heading, and all Tasks under the 'Things to Do' heading
- Click on a specific Task Group to display only the Tasks that pertain to that Task Group, or click 'All Groups' to show all Tasks
- Click on an incomplete Task to mark it complete (or vice versa)
- Locked Tasks cannot be marked complete until all dependent tasks are marked complete

## Notes
- I implemented the following case to the best of my judgment, but believe it warrants further consideration: 
  - Task A is marked complete, which causes Task B (previously locked) to become unlocked
  - Task B is marked as complete
  - Task A is subsequently changed from complete to incomplete
  
