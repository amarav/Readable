import React,{Component} from 'react';
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Categories from './Categories'
import Posts from './Posts'

class Main extends Component
{
  render(){
     return (
        <React.Fragment>
        <Categories />
        <Posts />
        </React.Fragment>
       );
  }
}

export default Main