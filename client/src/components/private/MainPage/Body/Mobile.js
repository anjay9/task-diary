import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, Container, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import {
  OutlinedBox,
  TaskEditor,
  TaskList,
  Settings,
} from './components';

const useStyles = makeStyles(theme => ({
  page: {
    marginBottom: 56 + 10 + theme.margin.main,
    [theme.breakpoints.up('sm')]: {
      marginBottom: 64 + 15 + theme.margin.main,
    },
  },
  mini: {
    width: '100%',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.margin.main,
    marginBottom: theme.margin.main,
  },
  miniTitle: {
    marginBottom: theme.margin.main,
  },
}));

function MediumWrapper(props) {
  const { title, children } = props;
  return (
    <Container maxWidth='sm'>
      <OutlinedBox title={ title }>
        { children }
      </OutlinedBox>
    </Container>
  );
}

function MinimalWrapper(props) {
  const { title, children } = props;
  const classes = useStyles();
  return (
    <div className={ classes.mini }>
      <Typography align='center' variant='h5' className={ classes.miniTitle }>
        { title }
      </Typography>
      { children }
    </div>
  );
}

function MobilePages(props) {
  const { currentMobilePage, taskId } = props;
  const classes = useStyles();

  const greaterThanSmall = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const Wrapper = (greaterThanSmall) ? MediumWrapper : MinimalWrapper;

  if (currentMobilePage === 'task-editor') {
    return (
      <div className={ classes.page }>
        <Wrapper title={ (taskId) ? 'Edit task' : 'Add task'}>
          <TaskEditor />
        </Wrapper>
      </div>
    );
  }

  if (currentMobilePage === 'task-list') {
    return (
      <div className={ classes.page }>
        <Wrapper title='Your tasks'>
          <TaskList />
        </Wrapper>
      </div>
    );
  }

  return (
    <div className={ classes.page }>
      <Wrapper title='Settings'>
        <Settings />
      </Wrapper>
    </div>
  );
}

function mapState(state) {
  const { currentMobilePage } = state.mobilePages;
  const { taskId } = state.taskEditor;
  return { currentMobilePage, taskId };
}

export default connect(
  mapState,
)(MobilePages);
