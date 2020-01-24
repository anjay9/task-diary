import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import { connect } from 'react-redux';

import Navigation from './Navigation';
import Body from './Body';
import getData from '../../../actions/getData';

const useStyles = makeStyles(theme => ({
  root: props => ({
    pointerEvents: (props.waiting) ? 'none' : null,
  }),
  progress: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: theme.loadingHeight,
  },
}));

function MainPage(props) {
  const { waiting, getData } = props;
  const classes = useStyles({ waiting });

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={ classes.root }>
      <Navigation />
      <Body />
      { (waiting) ? <LinearProgress className={ classes.progress } /> : null }
    </div>
  );
}

function mapState(state) {
  const { waiting } = state.taskEditor;
  return { waiting };
}

export default connect(
  mapState,
  { getData },
)(MainPage);
