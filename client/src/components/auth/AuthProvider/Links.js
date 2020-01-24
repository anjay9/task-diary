import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.margin.item,
  },
}));

function Links(props) {
  const { link1, link2 } = props;
  const classes = useStyles();

  return (
    <Grid container className={ classes.root }>
      <Grid item xs>
        {
          (link1)
            ? (
              <Link href={ link1.href } variant='body2'>
                { link1.text }
              </Link>
            )
            : null
        }
      </Grid>
      <Grid item>
        {
          (link2)
            ? (
              <Link href={ link2.href } variant='body2'>
                { link2.text }
              </Link>
            )
            : null
        }
      </Grid>
    </Grid>
  );
}

export default Links;
