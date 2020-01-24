import React from 'react';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { CssBaseline } from '@material-ui/core';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import store from '../helpers/store';
import history from '../helpers/history';
import PrivateRoute from './PrivateRoute';
import TasksPage from './TasksPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[100],
    },
  },
});

function App() {
  history.listen((location, action) => {
    // clear alert on location change
    // this.props.clearAlerts();
  });
  return (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <MuiPickersUtilsProvider utils={ DateFnsUtils }>
          <CssBaseline />
          <Router history={ history }>
            <Switch>
              <PrivateRoute exact path='/' component={ TasksPage } />
              <PrivateRoute exact path='/' component={ SettingsPage } />
              <Route exact path='/login' component={ LoginPage } />
              <Route exact path='/register' component={ RegisterPage } />
              <Redirect from='*' to='/' />
            </Switch>
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
