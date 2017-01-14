var React = require('react');
var ReactDOM = require ('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require ('Main');


// load foundation-sites

require ('style!css!foundation-sites/dist/foundation.min.css')

$(document).foundation();

require ('style!css!sass!applicationStyles')




ReactDOM.render (
<Router history = {hashHistory}>
  <Route path= "/" component = {Main}/>


</Router>,
document.getElementById('app')
);
