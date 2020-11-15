import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

window.$ = window.jQuery = require('jquery')

const Loader = () => {
    $(document).ready(function(){
        $(".close").click(function(){
            $(".nav").hide(500);
        })
        $(".bar").click(function(){
            $(".nav").show(500);
        })
    })
    return ( 
    <div>
    </div>
     );
}
 
export default Loader;