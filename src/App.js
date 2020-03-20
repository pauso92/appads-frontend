import React from 'react';
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
      {/* < Report_view/> */}
      <Login />
      <p>hola</p>
      <TableItem />
      <ChartsItem />
    </div>
  );
}

export default App;
