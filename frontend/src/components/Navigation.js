import React from 'react'

import { Nav, Navbar, Container} from 'react-bootstrap'

import { Link } from 'react-router-dom'

const Navigation = () => (
    <Navbar style={{backgroundColor: '#002c3e'}}>
        <Container>
            
<div className="w3-top">
 <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
  <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i className="fa fa-bars"></i></a>
  <Link className="w3-bar-item w3-button w3-padding-large w3-theme-d4" to='/'><i className="fa fa-home w3-margin-right"></i>Readable</Link>
  <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News"><i className="fa fa-globe"></i></a>
  <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings"><i className="fa fa-user"></i></a>
  <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages"><i className="fa fa-envelope"></i></a>
  <div className="w3-dropdown-hover w3-hide-small">
    <button className="w3-button w3-padding-large" title="Notifications"><i className="fa fa-bell"></i><span className="w3-badge w3-right w3-small w3-green">3</span></button>     
    <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{width:'300'}}>
      <a href="#" className="w3-bar-item w3-button">One new friend request</a>
      <a href="#" className="w3-bar-item w3-button">John Doe posted on your wall</a>
      <a href="#" className="w3-bar-item w3-button">Jane likes your post</a>
    </div>
  </div>
  <Link className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" to="/posts/new"><i className="fa fa-pencil"></i> Post</Link>
 </div>
</div>
          
        </Container>
    </Navbar>
)

export default Navigation