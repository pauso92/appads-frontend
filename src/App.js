import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
//import logo from './logo.svg';
import TableItem from './tableItem'
import ChartsItem from './ChartsItem'
import LocatuionList from '../src/componentes/LocationList';
import { Grid, Col, Row } from 'react-flexbox-grid';
import ForecastExtended from '../src/componentes/ForecastExtended';
//import './App.css'

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

      <TableItem></TableItem>
      <ChartsItem></ChartsItem>
      </>
    );
  }
}

export default App;
