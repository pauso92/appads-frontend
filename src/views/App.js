import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Report_view from './Report_view';
import ReportView from './ReportView';
import Login from './Login'
import ChartsItem from '../components/ChartsItem';
import LocatuionList from '../components/LocationList';
import { Grid, Col, Row } from 'react-flexbox-grid';
import ForecastExtended from '../components/ForecastExtended';

const cities = [
  "Lima,pe",
  "Buenos Aires,ar",
  "Ciudad de México,mx",
  "Bogota,col",
  "Lima,pe",
  "Buenos Aires,ar",
]

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null
    };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {
    const { city } = this.state;
    return (
      <>
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Weather App
              </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocatuionList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  {
                    !city ?
                      <h1>No se ha seleccionado Ciudad</h1> :
                      <ForecastExtended city={city}></ForecastExtended>
                  }
                </div>
              </Paper>
            </Col>
          </Row>

        </Grid>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
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



        <ChartsItem></ChartsItem>
      </>
    );
  }
}

export default App;
