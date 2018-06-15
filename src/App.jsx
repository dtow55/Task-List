import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { loadTasks, updateTasksToRender, toggleComplete } from './redux/actions';
import TaskList from './components/taskList';
import TaskGroupList from './components/taskGroupList';
import './App.css';

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
              Task Group 
            </PageHeader>

            <a onClick={() => {this.props.updateTasksToRender(Object.keys(this.props.tasks))}}>
              All Groups
            </a><br/><br/>

            <TaskGroupList 
              groups={this.props.groups} 
              tasks={this.props.tasks} 
              updateTasksToRender={this.props.updateTasksToRender}
            />

          </Col>

          <Col md={4}>
            <PageHeader>
              Things to Do
            </PageHeader>

            <TaskList 
              tasks={this.props.tasks} 
              tasksToRender={this.props.tasksToRender} 
              toggleComplete={this.props.toggleComplete}
            />

          </Col>

        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks ? state.tasks : [],
    tasksToRender: state.tasksToRender ? state.tasksToRender : [],
    groups: state.groups ? state.groups : []
  };
}

export default connect(mapStateToProps, { loadTasks, updateTasksToRender, toggleComplete })(App);
