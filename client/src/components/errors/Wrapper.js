import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  text: {
    marginBottom: theme.margin.main,
  },
}));

function Wrapper(props) {
  const { text, buttonText, buttonUrl } = props;
  const classes = useStyles();

  return (
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Typography variant='h5' className={ classes.text }>{ text }</Typography>

      <Button
        component={ Link }
        to={ buttonUrl }
        variant='contained'
        color='primary'
      >
        { buttonText }
      </Button>
    </Grid>
  );
}

export default Wrapper;
