import 'index.html';
import 'app/.styl';
import 'app/favicon.ico';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'app/router';

ReactDOM.render(<AppRouter/>, document.querySelector('#root'));