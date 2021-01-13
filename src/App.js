import React from 'react';
import { Nav } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'
import Loader from './components/loader'
import Icons from './components/icons'
import About from './components/about';
import Contact from './components/contact';
import Navigation from './components/links'
import Home from './components/home'
import Partnerships from './components/partnerships'
import Donate from './components/donate'
import Rights from './components/rights'
import Emergency from './components/emergency'
import Education from './components/education'
import Violence from './components/violence'
import Nyeneba from './components/nyeneba'
import MyForm from './components/form'
import BlogPage from './blog/blogpage';
import SingleBlog from './blog/singleBlog';
import Success from './components/success';
import Error from './components/error';
import SingleVideo from './blog/singlevideo';
import BlogCommentForm from './blog/blogCommentForm';
import CommentList from './blog/commentList';

require('bootstrap');




function App() {
  return (
    
    <BrowserRouter>
      <div>
      <Navigation />
        <Loader />
      
        
        <div className="content">
        <div>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/partnerships" component={Partnerships} />
          <Route path="/donate" component={Donate} />
          <Route path="/rights" component={Rights} />
          <Route path="/emergency" component={Emergency} />
          <Route path="/education" component={Education} />
          <Route path="/violence" component={Violence} />
          <Route path="/nyeneba" component={Nyeneba} />
          <Route path="/form" component={MyForm} />
          <Route path="/success" component={Success} />
          <Route path="/error" component={Error} />
          <Route path="/blogpage" component={BlogPage} />
          <Route path="/singleblog/:id" component={SingleBlog} />
          <Route path="/singlevideo/:id" component={SingleVideo} />
          <Route path="/commentList" component={CommentList} />
          <Route path="/blogCommentForm" component={BlogCommentForm} />
          <Route path='/' exact={true} component={Home} />
          {/*<Route path="/single/:blogid" render= {props=> {
            <SingleBlog {...props}  />
          }} />
        */}
          </div>

        </div>

        <div className="footer justify-content-around d-flex flex-row">
          <div justify-content-start d-flex flex-column>
            <Icons />
            <Nav.Link href="/blogpage">Blog</Nav.Link>

            <h4 className="tex">BEWOCA &copy;2020</h4>
          </div>
          <div justify-content-around d-flex flex-column>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/partnerships">Partnerships</Nav.Link>
            <Nav.Link href="/donate">Donations</Nav.Link>
            <Nav.Link href="/skills">Empower</Nav.Link>
            <Nav.Link href="/staff">Team</Nav.Link>
            <Nav.Link href="/rights">Violence</Nav.Link></div>


        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
