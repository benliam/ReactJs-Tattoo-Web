/** React components */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,HashRouter } from 'react-router-dom';

/** Components */
import Main from "@/components/Main";


ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('app')
);