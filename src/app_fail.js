import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Report_view from './Report_view';
import Login from './Login'
//import logo from './logo.svg';
import ChartsItem from './ChartsItem'
import Inicio from './Registrate'
import Registrate from './Registrate';
//import './App.css'
import Registration from './views/Registration'

function App() {
  return (
    <div className="App">
<<<<<<< HEAD:src/App.js
      <div className="wrap_router">
        <Router className="router">
          <ul className="ul_router">
            <li className="li_router">
              <Link className="link_router" to="/">Inico</Link>
            </li>
            <li>
              <Link to="/Registro">Registrate</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            {/* <li>
          <Link to="/Report_view">Crear reporte</Link>
=======
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
>>>>>>> 90366ca4871f4454322823944164a14a741fb873:src/app_fail.js
        </li>
        <ll>
          <Link to="/Regitration">Registrate</Link>
        </ll>
        <li>
          <Link to="/Report_view">Crear reporte</Link>
        </li>
        <li>
          <Link to="/ChartsItem">ChartsItem</Link>
<<<<<<< HEAD:src/App.js
        </li> */}
          </ul>
          <Switch>
            {/* <Route exact path="/" component={Inicio} /> */}
            <Route exact path="/Registro" component={Registrate} />
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
=======
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
>>>>>>> 90366ca4871f4454322823944164a14a741fb873:src/app_fail.js
    </div>
  );
}

export default App;
