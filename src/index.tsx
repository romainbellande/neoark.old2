import React from 'react';
import ReactDOM from 'react-dom';
import { RouteProps } from 'react-router';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Dashboard from './components/Dashboard';

const routes: RouteProps[] = [
  {
    path: '/',
    component: Dashboard,
  },
];

ReactDOM.render(<App routes={routes} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
