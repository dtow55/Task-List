import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap'
import { loadTasks, updateTasksToRender } from './redux/actions'
import TaskList from './components/taskList.js.jsx'
import TaskGroupList from './components/taskGroupList.js.jsx'

class App extends Component {

  componentDidMount() {
    this.props.loadTasks();
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">

          <Col md={4}>
            <PageHeader>
              Things To Do
            </PageHeader>

            <TaskGroupList groups={this.props.groups} />

          </Col>

          <Col md={4}>
            <PageHeader>
              Task Group 
              <small>
                <a className='pull-right' onClick={() => {this.props.updateTasksToRender(Object.keys(this.props.tasks))}}>
                  All Groups
                </a>
              </small>
            </PageHeader>

            <TaskList tasks={this.props.tasks} tasksToRender={this.props.tasksToRender} />

          </Col>

        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    tasksToRender: state.tasksToRender,
    groups: state.groups
  }
}

export default connect(mapStateToProps, { loadTasks, updateTasksToRender })(App);
