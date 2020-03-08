import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, Router, withRouter, RouteComponentProps } from 'react-router-dom';
import { Security, SecureRoute } from '@okta/okta-react';

import './App.css';
import theme from 'src/theme';
import config from 'src/common/config';
import AppRouteProps from 'src/common/interfaces/app-route.interface';
import { oktaSignIn } from 'src/common/okta';

const onAuthRequired = (history: any) => () => {
  // Redirect to the /login page that has a CustomLoginComponent
  // This example is specific to React-Router
  history.push('/login');
};

interface Props {
  routes: AppRouteProps[];
}

const App: React.FC<Props & RouteComponentProps> = ({ routes, history }) => {
  useEffect(() => {
    if (oktaSignIn.hasTokensInUrl()) {
      oktaSignIn.authClient.token.parseFromUrl().then(
        function success(tokens: any) {
          // Save the tokens for later use, e.g. if the page gets refreshed:
          // Add the token to tokenManager to automatically renew the token when needed
          tokens.forEach(function(token: any) {
            if (token.idToken) {
              oktaSignIn.authClient.tokenManager.add('idToken', token);
            }
            if (token.accessToken) {
              oktaSignIn.authClient.tokenManager.add('accessToken', token);
            }
          });

          // Say hello to the person who just signed in:
          oktaSignIn.authClient.tokenManager.get('idToken').then(function(idToken: any) {
            console.log('Hello, ' + idToken.claims.email);
            console.log('idToken', idToken);
          });
        },
        function error(err: any) {
          // handle errors as needed
          console.error(err);
        },
      );
    } else {
      oktaSignIn.authClient.session.get().then(function(res: any) {
        // Session exists, show logged in state.
        if (res.status === 'ACTIVE') {
          console.log('Welcome back, ' + res.login);
          console.log('res', res);
          return;
        }
      });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Security {...config.okta} onAuthRequired={onAuthRequired(history)}>
          <Switch>
            {routes.map(({ secure, ...route }, index) =>
              secure ? <SecureRoute key={`route-${index}`} {...route} /> : <Route key={`route-${index}`} {...route} />,
            )}
          </Switch>
        </Security>
      </Router>
    </ThemeProvider>
  );
};

export default withRouter(App);
