import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';
import Customers from './components/customers'
import NavBar from './components/navbar';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
    <NavBar></NavBar>
    <main className="container">
      <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/" render={() => 'Not-Found'} />
      </Switch>
    </main>  
    </React.Fragment>
  );
}

export default App;
