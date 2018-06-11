import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap'
import { loadTasksAndGroups } from './redux/actions'
import TaskList from './components/taskList.js.jsx'
import TaskGroupList from './components/taskGroupList.js.jsx'

class App extends Component {

  componentDidMount() {
    this.props.loadTasksAndGroups();
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
            </PageHeader>

            <TaskList tasks={this.props.tasks} />

          </Col>

        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    groups: state.groups
  }
}

export default connect(mapStateToProps, { loadTasksAndGroups })(App);
