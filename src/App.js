import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme/theme';
import SignIn from './containers/Auth/SignIn';
import ForgotPassword from './containers/Auth/ForgotPassword';
import ForgotPasswordNextStep from './containers/Auth/ForgotPasswordNextStep';
import MainContent from './containers/MainContent';
import routes from './constants/routes';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path={routes.SIGN_IN} component={SignIn} />
        <Route exact path={routes.FORGOT_PASSWORD} component={ForgotPassword} />
        <Route exact path={routes.FORGOT_PASSWORD_NEXTSTEP} component={ForgotPasswordNextStep} />
        <Route path="/" component={MainContent} />
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
