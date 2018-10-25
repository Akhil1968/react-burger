import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import BurgerBuilder from './containers/BurgerBuilder';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BurgerBuilder />, document.getElementById('root'));

serviceWorker.unregister();
