import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, BrowserRouter as Router, RouteProps } from 'react-router-dom';

import './App.css';
import theme from 'src/theme';

interface Props {
  routes: RouteProps[];
}

const App: React.FC<Props> = ({ routes }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route key={`route-${index}`} {...route} />
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
