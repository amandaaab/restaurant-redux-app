import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(logger, thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

export default store;