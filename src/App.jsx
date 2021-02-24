import React, { Component } from 'react';
import TabGroup from './components/tabs';
import Home from './containers/home/index';

console.log(1)

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Product Hunt</p>
      </header>
      <main>
        <Home />
      </main>
      </div>
  );
}

export default App;