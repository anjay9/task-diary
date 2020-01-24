import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit';
import ReorderIcon from '@material-ui/icons/Reorder';
import SettingsIcon from '@material-ui/icons/Settings';
import { connect } from 'react-redux';

import {
  switchToTaskEditor,
  switchToTaskList,
  switchToSettings,
} from '../../../../../actions/mobilePages';

const useStyles = makeStyles(theme => ({
  root: {
    height: 56,
    position: 'fixed',
    left: 10,
    bottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 7,
    zIndex: 1100,
    [theme.breakpoints.up('sm')]: {
      height: 64,
      left: 15,
      bottom: 15,
    },
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  clickedButton: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: 'rgba(0,0,0, 0.3)',
    },
  },
}));

function MobilePagesTogler(props) {
  const {
    currentMobilePage,
    existingTaskId,
    switchToTaskEditor,
    switchToTaskList,
    switchToSettings,
  } = props;
  const classes = useStyles();

  return (
    <Box
      borderRadius={ 10 }
      boxShadow={ 20 }
      bgcolor='primary.main'
      className={ classes.root }
    >

      <IconButton
        onClick={ () => switchToTaskEditor(currentMobilePage) }
        className={
          (currentMobilePage === 'task-editor')
            ? classes.clickedButton
            : classes.button
        }
      >
        {
          (existingTaskId)
            ? <EditIcon />
            : <AddIcon />
        }
      </IconButton>

      <IconButton
        onClick={ () => switchToTaskList(currentMobilePage) }
        className={
          (currentMobilePage === 'task-list')
            ? classes.clickedButton
            : classes.button
        }
      >
        <ReorderIcon />
      </IconButton>

      <IconButton
        onClick={ () => switchToSettings(currentMobilePage) }
        className={
          (currentMobilePage === 'settings')
            ? classes.clickedButton
            : classes.button
        }
      >
        <SettingsIcon />
      </IconButton>

    </Box>
  );
}

function mapState(state) {
  const { currentMobilePage } = state.mobilePages;
  const { existingTaskId } = state.taskEditor;
  return {
    currentMobilePage,
    existingTaskId,
  };
}

export default connect(
  mapState,
  {
    switchToTaskEditor,
    switchToTaskList,
    switchToSettings,
  },
)(MobilePagesTogler);
