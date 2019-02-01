import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './redux/index'

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import './css/custom.css'
import 'modules/font-awesome/css/font-awesome.min.css'


import App from './main/app'
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('app')
)
