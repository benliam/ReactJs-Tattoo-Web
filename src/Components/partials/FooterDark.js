import React, { Component } from "react";
import ReactDOM from 'react-dom';

import ChervonUp from '../../images/bootstrap-icons.svg#chevron-compact-up';

export class FooterDark extends Component {
 render() {
   return (
     <footer>
        <div className="container-fluid p-5">
          <div className="d-flex justify-content-between align-items-center">
            <div className="social"><a className="trigger" href="#">Follow</a>
              <ul className="social-nav">
                <li> <a href="#">Instagram</a></li>
                <li> <a href="#">Twitter</a></li>
                <li> <a href="#">Vimeo</a></li>
                <li> <a href="#">YouTube</a></li>
              </ul>
            </div>
            <div className="copy">2021 © Benz.Tattoo Design. All rights reserved</div><a className="to-top" href="#"><svg className="bi" width={32} height={32} fill="currentColor">
                <use xlinkHref={ChervonUp} />
              </svg></a>
          </div>
        </div>
      </footer>
   )
 }
}

export default FooterDark