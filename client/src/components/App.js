import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { CssBaseline } from '@material-ui/core';
import { Switch, Router, Route, Redirect } from 'react-router-dom';

import store from '../store';
import history from '../history';
import PrivateRoute from './PrivateRoute';
import { MainPage } from './private';
import { ErrorAuthPage, ErrorGeneralPage } from './errors';
import { LoginPage, RegisterPage } from './auth';

const theme = createMuiTheme({
  spacing: 8,
  margin: {
    auth: 64,
    side: 24,
    main: 30,
    headBot: 20,
    bodyBot: 56,
    item: 8,
    smItem: 4,
  },
  loadingHeight: 6,
  palette: {
    primary: {
      main: '#0748db',
      //main: deepPurple['A700'],
      contrastText: 'rgb(255,255,255)',
    },
    error: {
      main: '#e90e0a',
      background: '#ffeeee',
      //main: red[700],
      //background: red[50],
    },
    label: {
      main: '#616161',
      //main: grey[700],
    },
    outline: {
      main: '#9e9e9e',
      //main: grey[500],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 900,
      lg: 1300,
      xl: 1800,
    },
  },
});

function App() {
  /*
  history.listen((location, action) => {
    // clear alert on location change
    // this.props clearAlert();
  });
  */

  return (
    <StoreProvider store={ store }>
      <ThemeProvider theme={ theme }>
        <MuiPickersUtilsProvider utils={ DateFnsUtils }>
          <CssBaseline />
          <Router history={ history }>
            <Switch>
              <PrivateRoute exact path='/' component={ MainPage } />
              <Route exact path='/error-auth' component={ ErrorAuthPage } />
              <Route exact path='/error-general' component={ ErrorGeneralPage } />
              <Route exact path='/login' component={ LoginPage } />
              <Route exact path='/register' component={ RegisterPage } />
              <Redirect from='*' to='/' />
            </Switch>
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
