import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import Home from './layouts/Home';
import { Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";


const hist = createBrowserHistory();



ReactDOM.render(
  <Router history={hist}>
      <div>
        <Home/>
      </div>
      
    </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
