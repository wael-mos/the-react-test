import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Accueil from './components/Accueil'
import Form from './components/Form'
import Info from './components/Info'
// import Header from './Header';
import Instructions from './Instructions';
import FormContextProvider from './contexts/FormContext';


const App = () =>
{
  
  return (
    <BrowserRouter>
      <div className="App">
        <Instructions />
        <Switch>
          <Route exact path='/' component={ Accueil } />
          <Route path='/form'>
            <FormContextProvider>
              <Form />
            </FormContextProvider>
          </Route>
          <Route path='/info'>
            <FormContextProvider>
              <Info />
            </FormContextProvider>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
