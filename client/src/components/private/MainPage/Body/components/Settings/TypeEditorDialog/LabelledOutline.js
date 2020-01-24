import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import NotchedOutline from '@material-ui/core/OutlinedInput/NotchedOutline';

const useStyles = makeStyles(theme => ({
  relative: {
    position: 'relative',
  },
  inputLabel: {
    position: "absolute",
    left: 0,
    top: 0,
    // slight alteration to spec spacing to match visual spec result
    transform: 'translate(0, 24px) scale(1)',
    color: theme.palette.label.main,
  },
  root: {
    position: "relative",
  },
  content: {
    padding: "18.5px 14px",
  },
  notchedOutline: {
    borderRadius: theme.shape.borderRadius,
    borderColor: theme.palette.outline.main,
  },
  helper: {
    padding: "0px 14px",
  },
}));

function LabelledOutline(props) {
  const { id, label, children } = props;
  const classes = useStyles();

  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef(null);
  React.useEffect(() => {
    const labelNode = ReactDOM.findDOMNode(labelRef.current);
    setLabelWidth(labelNode != null ? labelNode.offsetWidth : 0);
  }, [label]);

  return (
    <div className={ classes.relative }>
      <InputLabel
        ref={labelRef}
        htmlFor={id}
        variant="outlined"
        className={classes.inputLabel}
        shrink
      >
        { label }
      </InputLabel>

      <div className={classes.root}>
        <div id={id} className={classes.content}>
          {children}
          <NotchedOutline
            notched
            labelWidth={ labelWidth }
            className={ classes.notchedOutline }
          />
        </div>
      </div>
    </div>
  );
}

export default LabelledOutline;
