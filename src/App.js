import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Accueil from './components/Accueil'
import Form from './components/Form'
import Info from './components/Info'
// import Header from './Header';
import Instructions from './Instructions';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Instructions />
        <Switch>
          <Route exact path='/' component={ Accueil } />
          <Route path='/form' component={ Form } />
          <Route path='/info' component={ Info } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
