import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { openTaskInTaskEditor } from '../../../../../../actions/taskEditor';

const useStyles = makeStyles(theme => ({
  button: {
    textTransform: 'none',
    marginTop: theme.margin.smItem,
    marginBottom: theme.margin.smItem,
    borderColor: theme.palette.outline.main,
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
  },
  firstLine: {
    width: '100%',
    textAlign: 'left',
    fontSize: 12,
    color: theme.palette.label.main,
    margin: 0,
    marginBottom: '-3px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  secondLine: props => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 17,
    fontWeight: 400,
    color: props.colorHex,
  }),
  name: {
    width: 'calc(100% - 110px)',
    overflow: 'hidden',
    textAlign: 'left',
    whiteSpace: 'nowrap',
  },
}));

function Task(props) {
  const { key, taskId, typeId, name, colorHex, startDate,
    endDate, startTime, endTime, hours, minutes,
    openTaskInTaskEditor } = props;
  const classes = useStyles({ colorHex });

  return (
    <Button
      fullWidth
      variant='outlined'
      className={ classes.button }
      key={ key }
      onClick={ () => openTaskInTaskEditor(taskId, typeId, startDate, endDate) }
    >
      <div className={ classes.buttonContainer }>
        <div className={ classes.firstLine }>
          <div>{ startTime }</div>
          <div>{ endTime }</div>
        </div>
        <div className={ classes.secondLine }>
          <div className={ classes.name }>
            { name }
          </div>
          <div className={ classes.time }>
            { (hours > 0) ? `${ hours } h` : null } {(minutes > 0) ? `${ minutes } min` : null }
          </div>
        </div>
      </div>
    </Button>
  );
}

export default connect(
  null,
  { openTaskInTaskEditor },
)(Task);
