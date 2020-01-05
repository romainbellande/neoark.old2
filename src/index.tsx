import React from 'react';
import ReactDOM from 'react-dom';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import routing from './routing';
import databaseInit from './common/database/database-init';

LogRocket.init(process.env.REACT_APP_LOG_ROCKET || '');
setupLogRocketReact(LogRocket);

databaseInit();

ReactDOM.render(<App routes={routing} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
