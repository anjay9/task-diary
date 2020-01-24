import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import {
  OutlinedBox,
  TaskEditor,
  TaskList,
  Settings,
} from './components';

function Full(props) {
  const { taskId } = props;

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={ 3 }>

        <Grid item xs={ 4 }>
          <OutlinedBox title={
            (taskId)
              ? 'Edit task'
              : 'Add task'
          }>
            <TaskEditor />
          </OutlinedBox>
        </Grid>

        <Grid item xs={ 4 }>
          <OutlinedBox title='Your tasks'>
            <TaskList />
          </OutlinedBox>
        </Grid>

        <Grid item xs={ 4 } style={{ overflow: 'auto' }}>
          <OutlinedBox title='Settings'>
            <Settings />
          </OutlinedBox>
        </Grid>

      </Grid>
    </Container>
  );
}

function mapState(state) {
  const { taskId } = state.taskEditor;
  return { taskId };
}

export default connect(
  mapState,
)(Full);
