import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';


var element = React.createElement('h1',{className: 'title'},'H20bserver');

ReactDOM.render(
    <App />, document.getElementById('root')
    );
=======

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 340e5259c0620ff440e8c6e2d5677c4316ea2e3a

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
