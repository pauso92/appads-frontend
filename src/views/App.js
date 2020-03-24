import React from 'react';
import ReportView from './ReportView'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Report_view from './Report_view';
import Login from './Login'

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
            <Link to="/summary">Gráficas</Link>
          </li>

        </ul>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Report_view" component={Report_view} />
          <Route exact path="/summary" component={ReportView} />
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
