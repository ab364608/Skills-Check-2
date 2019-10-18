import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import { HashRouter } from 'react-router-dom'

//Components
import Header from './Components/Header/Header';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Form from './Components/Form/Form';
import Routes from './Routes';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      // inventory: []
    }
  }

  //GET REQUEST

  // getInventory = () => {
  //   axios.get('/api/inventory').then(response => {
  //     this.setState({inventory: response.data})
  //   })

  // }

  // componentDidMount(){
  //   this.getInventory();
  // }

  render() {
    return (
      <HashRouter>
          <Header />
          {Routes}
          {/* <Dashboard inventory={this.state.inventory}/> */}
      </HashRouter>
    )
  }
}
