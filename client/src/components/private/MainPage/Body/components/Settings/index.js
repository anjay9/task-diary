import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';

import AccountDetails from './AccountDetails';
import OpenTypeEditorButton from './OpenTypeEditorButton';
import TypeList from './TypeList';
import TypeEditorDialog from './TypeEditorDialog';

const useStyles = makeStyles(theme => ({
  divider: {
    marginTop: theme.margin.main,
    marginBottom: theme.margin.main,
    marginLeft: -theme.margin.side,
    marginRight: -theme.margin.side,
    backgroundColor: theme.palette.outline.main,
  },
  space: {
    height: theme.margin.main,
  },
}));

function Settings(props) {
  const classes = useStyles();
  const greaterThanSmall = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <div>
      <AccountDetails/>
      { (greaterThanSmall) ? <Divider className={ classes.divider } /> : <div className={ classes.space } /> }
      <OpenTypeEditorButton />
      <TypeList />
      <TypeEditorDialog />
    </div>
  );
}

export default Settings;
