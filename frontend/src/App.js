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