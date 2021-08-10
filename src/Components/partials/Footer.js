import React, { Component } from "react";
import ReactDOM from 'react-dom';


export class Footer extends Component {
 render() {
   return (
      <footer className="fixed-bottom alt-footer">
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-sm-6 offset-sm-3 copy text-center">{new Date().getFullYear()} © Benz.Tattoo Design. All rights reserve</div>
            <div className="col-sm-3 text-right">
              <div className="social"><a className="trigger" href="#">Follow</a>
                <ul className="social-nav">
                  <li> <a href="#">YouTube</a></li>
                  <li> <a href="https://pinterest.com/benz.tattoodesign">Pinterest</a></li>
                  <li> <a href="https://instagram/benz.tattoodesign">Instagram</a></li>
                  <li> <a href="https://facebook.com/benz.tattoo.design">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
   )
 }
}

export default Footer