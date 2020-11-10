import React from 'react';
import { BrowserRouter,NavLink, Route, Link } from 'react-router-dom'
import {  Nav,Navbar,Button,Jumbotron, NavDropdown,Carousel,Form,FormControl, Card,Col, Container } from 'react-bootstrap';
import Icons from './components/icons'
import About from './components/about';
import Navigation from './components/links'
import Home from './components/home'

require('bootstrap');




function App() {
  return (
    <BrowserRouter>
    <div>
    <Navigation/>
<div className="content">
<Route path='/' exact={true} component={Home} />
<Route path="/about" component={About} />

</div>

<div className="footer justify-content-around d-flex flex-row">
       <h4>BEWOCA &copy;2020</h4>
       <Icons/>
     </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
