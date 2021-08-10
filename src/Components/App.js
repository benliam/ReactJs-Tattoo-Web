import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

//import '@/sass/index.scss';
import '../js/functions'
import '../css/App.css'
import '../images/bootstrap-icons.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


/* Components */
import Home from './Home';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';

import Header from './partials/Header';
import Footer from './partials/Footer';
import FooterDark from './partials/FooterDark';


export class App extends Component {
 render() {
   return (
   		<div>
		       <Switch>
		     	 <Route exact path="/">
		     	 	<Header />
		     			<Home />
		     	    <Footer />
		     	 </Route>
		     	  <Route exact path="/about">
		     	 	<Header />
		     			<About />
		     	    <FooterDark />
		     	 </Route>
		     	  <Route exact path="/contact">
		     	 	<Header />
		     			<Contact />
		     	    <FooterDark />
		     	 </Route>
		     	  <Route>
		     	 	<Header />
		     			<PageNotFound />
		     	    <Footer />
		     	 </Route>
		   	 	</Switch>
	   	 	
   	 	</div>
   )
 }
}

export default App