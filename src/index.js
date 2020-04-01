import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './views/App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost"; 
import {ApolloProvider} from '@apollo/react-hooks' 

const client = new ApolloClient({
    uri: 'http://localhost:4000'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
