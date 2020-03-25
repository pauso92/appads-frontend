import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
// import './App.css';

import Report_view from './Report_view';
import Login from './Login'
//import logo from './logo.svg';
import ChartsItem from './ChartsItem'
//import './App.css'
import Registration from './views/Registration'

function App() {
  return (
    <div className="App">
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <ll>
          <Link to="/Regitration">Registrate</Link>
        </ll>
        <li>
          <Link to="/Report_view">Crear reporte</Link>
        </li>
        <li>
          <Link to="/ChartsItem">ChartsItem</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Registrate" component={Registration} />
        <Route exact path="/Report_view" component={Report_view} />
        <Route exact path="/ChartsItem" component={ChartsItem} />
      </Switch>
    </Router>
      {/* < Report_view/> */}
      {/* <Login /> */}
      {/* <p>hola</p> */}
      {/* <ChartsItem /> */}
    </div>
  );
}

export default App;
