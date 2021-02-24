import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from '../../client';
import PostList from '../../components/List';

console.log(3)

const Home = () => {
  return (
      <main>
      <ApolloProvider client={client}>
    <div className="container">
      <div>
        <PostList />
      </div>
    </div>
  </ApolloProvider>
      </main>
  );
}

export default Home;
