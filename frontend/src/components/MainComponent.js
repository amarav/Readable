import React,{Component} from 'react';
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Categories from './Categories'
import Posts from './Posts'

class Main extends Component
{
  render(){
     return (
        <React.Fragment>  
        <Container>
        <Categories /><br/>
        <Switch>
          <Route exact path="/"  component={Posts}/> 
          <Route exact path="/:category"  component={Posts}/>
        </Switch>
        </Container>      
        </React.Fragment>
       );
  }
}

export default Main