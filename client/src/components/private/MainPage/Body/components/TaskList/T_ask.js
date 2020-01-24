import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  button: {
    borderColor: theme.palette.border.task,
    margin: 3,
  },
  task: {
    //padding: 10,
  },
  date: {
    fontSize: 12,
    color: 'rgb( 180, 180, 180 )',
    margin: 0,
    marginBottom: '-3px',
  },
  name: passed => ({
    fontSize: 17,
    fontWeight: 400,
    color: passed.color,
    display: 'inline-block',
    margin: 0,
  }),
  time: passed => ({
    fontSize: 17,
    fontWeight: 400,
    color: passed.color,
    display: 'inline-block',
    margin: 0,
    float: 'right',
  }),
  fullLine: props => ({
    border: `1px solid ${ props.color }`,
    borderRadius: 2,
    margin: 0,
    marginTop: 5,
    marginBottom: 5,
  }),
  lastLine: props => ({
    border: `1px solid ${ props.color }`,
    width: `calc( ${ props.minutes } / 60 * 100% )`,
    borderRadius: 2,
    margin: 0,
    marginTop: 5,
    marginBottom: 0,
  }),
}));

function Task(props) {
  const classes = useStyles(props);
  const {
    key,
    name,
    color,
    start,
    end,
    hours,
    minutes,
  } = props;

  function renderLines() {
    let lines = [];
    for (let i = 0; i < hours; i++) {
      lines.push( <hr className={ classes.fullLine } /> );
    }
    lines.push( <hr align='left' className={ classes.lastLine } /> );
    return lines;
  }

  return (
    <Button
      fullWidth
      variant='outlined'
      className={ classes.button }
    >
      <div key={ key } className={ classes.task }>
        <div className={ classes.date }>
          { start } - { end }
        </div>
        <div className={ classes.name }>
          { name }
        </div>
        <div className={ classes.time }>
          { (hours > 0) ? `${ hours } h` : null } {(minutes > 0) ? `${ minutes } min` : null }
        </div>
        { renderLines() }
      </div>
    </Button>
  );
}

export default Task;
