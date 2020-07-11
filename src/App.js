import React from 'react';
import Signup from './components/signup';
import './App.css';
import { Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Route path="/">
        <Signup/>
      </Route>
    </main>
  );
}

export default App;
