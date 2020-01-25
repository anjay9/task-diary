import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: -theme.margin.smItem,
    marginBottom: -theme.margin.smItem,
  },
  link: {
    width: '100%',
    textAlign: 'center',
    paddingTop: theme.margin.smItem,
    paddingBottom: theme.margin.smItem,
  },
}));

function AccountDetails(props) {
  const classes = useStyles();
  return (
    <div className={ classes.root }>
      <div className={ classes.link }>
        <Link href='/login' variant='body1' className={ classes.lin }>
          Log out
        </Link>
      </div>
    </div>
  );
}

export default AccountDetails;
