import './App.css';

import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './client';
import PostList from './components/Posts/List';
import './App.css';

console.log(1)

const App = () => {
  return (
    <div className="App">
      <header className="App-header">ls
        <p>Product Hunt</p>
      </header>
      <main>
      <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
      </nav>
      <div>
        <PostList />
      </div>
    </div>
  </ApolloProvider>
      </main>
    </div>
  );
}

export default App;

// client_id required	The id of your application
// client_secret required	The secret of your application
// grant_type required