import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router,withRouter } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.js';


 ReactDOM.render(<Router>
     <Route path="/" component={App}/>
 </Router>, document.getElementById('root'));

serviceWorker.unregister();