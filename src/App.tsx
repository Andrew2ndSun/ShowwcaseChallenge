import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './Home';
import Main from './Main';

function App() {
  

    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/main" component={Main} />
      </HashRouter>
    );
  }


export default App;
