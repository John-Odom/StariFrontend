import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import stariBookPage from './pages/stariBookPage'


const App = () => {
  return (
    <Switch>
      <Route exact path="/stari" component={stariBookPage}/>
    </Switch>

  );
}

export default App;
