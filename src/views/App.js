import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Report_view from './Report_view';
import ReportView from './ReportView';
import Login from './Login'
import '../css/login.css'
import Registration from './Registration';
import Cards from './Cards';
import SummaryTable from '../components/SummaryTable';


class App extends Component {

  render() {
    return (
      <>
        <Router>
        <div className="navlogin">
                    <h1>AppAds</h1>
                    <div className="alogin">
                        <Link to="/">Home</Link>
                        <Link to="/">Nosotros</Link>
                        <Link to="/Login">Login</Link>
                        <Link to="/Registrate">Registrate</Link>
                    </div>
                </div>
          <Switch>
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Report_view" component={Report_view} />
            <Route exact path="/summary" component={ReportView} />
            <Route exact path="/Registrate" component={Registration} />
            <Route exact path="/Cards" component={Cards} />
            <Route exact path="/ReportView" component={ReportView}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
