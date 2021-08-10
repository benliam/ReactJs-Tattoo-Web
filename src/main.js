/** React components */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,HashRouter } from 'react-router-dom';

/** Components */
import App from "./Components/App";


ReactDOM.render(
  <BrowserRouter>
	 <App />
 </BrowserRouter>,
  document.getElementById('app')
);