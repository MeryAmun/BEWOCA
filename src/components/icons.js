import React from 'react';
import {Link} from 'react-router-dom';

const Icons = () => {
    return (
        <div className="d-flex justify-content-between flex-row">
        <h3 className="tex text-info">Follow Us</h3>
        <div className="icons flex-column-sm ">
        <Link to="https://web.facebook.com/Better-World-Community-And-Advocacy-Organisation-166805994242255">
        <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
        </Link>
        <Link to="#">
        <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
        </Link>
        <Link to="#">
        <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </Link>
        </div>
       
       
       
        </div>
      );
}
 
export default Icons;