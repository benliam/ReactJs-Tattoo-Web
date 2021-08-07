import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

//import '@/sass/index.scss';
import '../js/functions'
import '../sass/index.scss'
import '../images/bootstrap-icons.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


/* Components */
import Home from './Home';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';

import Header from './Header';
import Footer from './Footer';



export class Main extends Component {
 render() {
   return (
   		<div>
   		   <Header />
		       <Switch>
		     	  <Route exact path="/" component={withRouter(Home)} />
		     	  <Route exact path="/home" component={withRouter(Home)} />
		     	  <Route exact path="/about" component={withRouter(About)} />
		     	  <Route exact path="/contact" component={withRouter(Contact)} />
		     	  <Route component={PageNotFound} />
		   	 	</Switch>
	   	 	<Footer />
   	 	</div>
   )
 }
}

export default Main