import 'index.html';
import 'app/.styl';
import 'app/favicon.ico';
import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from 'app/provider';

ReactDOM.render(<AppProvider/>, document.querySelector('#root'));