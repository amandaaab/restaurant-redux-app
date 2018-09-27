import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
