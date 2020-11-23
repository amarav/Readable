import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from './components/MainComponent'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import store from './redux/store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: "backend-data"
    };
  }

  //To run inside the Workspace, please include the credentials.
  
  componentDidMount() {
 /*   const api = process.env.REACT_APP_BACKEND || 'http://localhost:3001';
    const url = `${api}/categories`;
    console.log("fetching from url", url);
    fetch(url, {
      headers: { Authorization: "whatever-you-want" },
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        this.setState({ backend: data });
      }); */ 
  } 

  // To run outside of the Workspace, please do not include the credentials.

  /* 
  componentDidMount() {
    const api = process.env.REACT_APP_BACKEND ||  'http://localhost:3001';
    const url = `${api}/categories`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }} )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        this.setState({backend:data});
      });
  }
  */

  render() {
    return (
      <div className="App">
       <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
       </Provider>
      </div>
    );
  }
}

export default App;