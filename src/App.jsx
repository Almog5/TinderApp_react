import React from 'react';
import './App.css';
import CCWelcom from './Component/CCWelcom';
import CCMain from './Component/CCMain';
import CCFavorite from './Component/CCFavorite';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";




function App() {
  
  return (
    <div className='container'>
      <Router>
        <Link to='/'></Link>
        <Switch>
          <Route exact path='/'>
            <CCWelcom />
          </Route>
          <Route  path='/main/:fromage/:toage/:gender'>
            <CCMain/>
          </Route>
          <Route path='/favorite'>
            <CCFavorite/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
