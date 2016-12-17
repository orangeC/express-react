import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routers from './router';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


ReactDOM.render(<Routers />,document.getElementById('root'));
