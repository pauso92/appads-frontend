import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
// import './App.css';

import Report_view from './Report_view';
import Login from './Login'
//import logo from './logo.svg';
import TableItem from './tableItem'
import ChartsItem from './ChartsItem'
//import './App.css'

function App() {
  return (
    <div className="App">
    <Router>
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Report_view">Crear reporte</Link>
        </li>
        <li>
          <Link to="/TableItem">TableItem</Link>
        </li>
        <li>
          <Link to="/ChartsItem">ChartsItem</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Report_view" component={Report_view} />
        <Route exact path="/TableItem" component={TableItem} />
        <Route exact path="/ChartsItem" component={ChartsItem} />
      </Switch>
    </Router>
      {/* < Report_view/> */}
      {/* <Login /> */}
      {/* <p>hola</p> */}
      {/* <TableItem /> */}
      {/* <ChartsItem /> */}
    </div>
  );
}

export default App;
