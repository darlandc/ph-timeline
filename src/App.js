import './App.css';

import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './client';
import PostList from './components/Posts/List';
import TabGroup from './components/Tabs/Tabs';

console.log(1)

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Product Hunt</p>
        <TabGroup/>
      </header>
      <main>
      <ApolloProvider client={client}>
    <div className="container">
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