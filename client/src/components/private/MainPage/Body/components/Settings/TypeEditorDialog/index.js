import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  LinearProgress,
} from '@material-ui/core';
import { connect } from 'react-redux';

import ErrorProvider from './ErrorProvider';
import NameField from './NameField';
import ColorField from './ColorField';
import DeleteButton from './DeleteButton';
import ApplyButton from './ApplyButton';
import { close } from '../../../../../../../actions/typeEditor';

const useStyles = makeStyles(theme => ({
  title: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progress: {
    height: theme.loadingHeight,
  },
}));

function TypeEditorDialog(props) {
  const { waiting, isOpened, typeId, close } = props;
  const classes = useStyles({ waiting });

  const tinyScreen = useMediaQuery('(max-width: 350px)');

  return (
    <Dialog
      open={ (isOpened) ? true : false }
      onClose={ (waiting) ? null : close }
    >
      <DialogTitle className={ classes.title }>
        <Typography variant={ (tinyScreen) ? 'h5' : 'h4' }>
          {
            (typeId)
              ? 'Edit task type'
              : 'Create task type'
          }
        </Typography>
      </DialogTitle>

     <ErrorProvider />

      <DialogContent>
        <NameField />
        <ColorField />
      </DialogContent>

      <DialogActions className={ classes.actions }>
        {
          (typeId)
            ? <DeleteButton />
            : <span />
        }
        <ApplyButton text={ (typeId)
          ? (tinyScreen) ? 'Apply' : 'Apply changes'
          : 'Create'
        } />
      </DialogActions>

      { (waiting) ? <LinearProgress className={ classes.progress } /> : null }
    </Dialog>
  );
}

function mapState(state) {
  const { waiting, isOpened, typeId } = state.typeEditor;
  return { waiting, isOpened, typeId };
}

export default connect(
  mapState,
  { close },
)(TypeEditorDialog);
