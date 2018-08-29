## Getting Started
- Fork and clone
- Run `npm install` to install package dependencies 
- Run `npm start` to start the app on a local server. If a browser window doesn't open automatically, open a browser window and navigate to the address listed in the console

## Implementation
- [React](https://github.com/facebook/react) 
- [Redux](https://github.com/reduxjs/redux)
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap)
- [Create-React-App](https://github.com/facebook/create-react-app), with some custom CSS styling

## Usage
- App initially loads displaying all Task Groups under the 'Task Group' heading, and all Tasks under the 'Things to Do' heading
- Click on a specific Task Group to display only the Tasks that pertain to that Task Group, or click 'All Groups' to show all Tasks
- Click on an incomplete Task to mark it complete (or vice versa)
- Locked Tasks cannot be marked complete until all dependent tasks are marked complete

## Notes and Assumptions
- I implemented the following case to the best of my judgment, but believe it warrants further consideration. The App currently allows Task B to remain marked as complete, although a case could be made to make it revert to locked status
  - Task A is marked complete, which causes Task B (previously locked) to become unlocked
  - Task B is marked as complete
  - Task A is subsequently changed from complete to incomplete
- The App currently has to calculate unique groups from the Task payload, I suggest modifying the backend API to provide these groups in JSON format

