import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Categories from './Categories'
import Posts from './Posts'
import PostForm from './PostForm'
import Navigation from './Navigation'
import EditForm from './EditForm'

class Main extends Component
{
  render(){
     return (
        <React.Fragment>  
        <Navigation /> <br/>
        <Container>
        <Categories /><br/>
        <Switch>
          <Route exact path="/"  component={Posts}/> 
          <Route exact path="/:category"  component={Posts}/>          
          <Route exact path="/posts/new" component={PostForm} />
          <Route exact path="/:category/:id" component={Posts} />
          <Route exact path="/:category/:id/edit" component={EditForm} />
        </Switch>
        </Container>      
        </React.Fragment>
       );
  }
}

export default Main