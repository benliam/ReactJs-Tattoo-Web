import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

//import '@/sass/index.scss';
import '@/js/functions'
import '@/sass/index.scss'
import '@/images/bootstrap-icons.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


/* Components */
import Home from '@/Components/Home';
import About from '@/Components/About';
import Contact from '@/Components/Contact';
import PageNotFound from '@/Components/PageNotFound';

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';



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
	   	 	<Switch>
		     	  <Route component={PageNotFound} />
		   	 </Switch>
   	 	</div>
   )
 }
}

export default Main