import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
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

require('bootstrap');




function App() {
  return (
    <BrowserRouter>
    <div>
    <Navigation/>
<div className="content">
<Route path='/' exact={true} component={Home} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/partnerships" component={Partnerships}/>
<Route path="/donate" component={Donate}/>
<Route path="/rights" component={Rights}/>
<Route path="/emergency" component={Emergency}/>
<Route path="/education" component={Education}/>
<Route path="/violence" component={Violence}/>
<Route path="/nyeneba" component={Nyeneba}/>


</div>

<div className="footer justify-content-around d-flex flex-row">
       <h4 className="tex">BEWOCA &copy;2020</h4>
       <Icons/>
     </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
