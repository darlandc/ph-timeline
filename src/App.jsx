import React, { Component } from 'react';
import TabGroup from './components/Tabs';
import Home from './containers/home/index';

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