import React,{Component} from 'react';
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Categories from './Categories'

class Main extends Component
{
  render(){
     return (
        <React.Fragment>
        <Categories />
        </React.Fragment>
       );
  }
}

export default Main