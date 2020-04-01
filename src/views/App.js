import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Report_view from './Report_view';
import ReportView from './ReportView';
import Login from './Login'
import '../css/login.css'
import Registration from './Registration';
import Cards from './Cards';
//import SummaryTable from '../components/SummaryTable';


class App extends Component {

  render() {
    return (
      <>
        <Router>
          <div className="navlogin">
            <h1>AppAds</h1>
            <div className="alogin">
              <Link to="/login">Login</Link>
              <Link to="/registrate">Registrate</Link>
              <Link to="/">Home</Link>
              <Link to="/cards">Cards</Link>
              <Link to="/report-view">Report_view</Link>
              <Link to="/summary">Sumamary</Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/registrate" component={Registration} />
            <Route exact path="/cards" component={Cards} />
            <Route exact path="/report-view" component={Report_view} />
            <Route exact path="/summary" component={ReportView} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
