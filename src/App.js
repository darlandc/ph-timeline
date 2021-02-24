import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './client';
import PostList from './components/Posts/List';
import TabGroup from './components/Tabs/Tabs';
import Home from './containers/Home';

console.log(1)

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Product Hunt</p>
        <TabGroup/>
      </header>
      <main>
      <Home />
      </main>
      <div>

      </div>
    </div>
  );
}

export default App;

// client_id required	The id of your application
// client_secret required	The secret of your application
// grant_type required