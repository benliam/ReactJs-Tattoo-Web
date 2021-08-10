import React, { Component } from "react";
import ReactDOM from 'react-dom';


import Slide from '../images/slide2.png';

export class Home extends Component {
 render() {
   return (
      <main>
        <div className="glide slider">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide invert">
                <div className="jumbotron jumbotron-fluid vh-100 d-flex align-items-center">
                  <div className="bg o-8" style={{backgroundImage: `url(${Slide})` }} />
                  <div className="container-fluid py-6"><a className="tilt no-link mx-auto" href="project-single-hero.html">
                      <h6>We are tattoo studio</h6>
                      <h4 className="massive pt-2"><span className="d-block">Benz</span><span className="d-block">Tattoo</span><span className="d-block">Design</span></h4>
                    </a></div>
                </div>
              </li>
              <li className="glide__slide invert">
                <div className="jumbotron jumbotron-fluid vh-100 d-flex align-items-center">
                  <div className="bg o-8" style={{backgroundImage: `url(${Slide})` }}  />
                  <div className="container-fluid py-6"><a className="tilt no-link mx-auto" href="project-single-alt.html">
                      <h6>Design inquires</h6>
                      <h1 className="massive"> <span className="d-block">Our tattoo</span><span className="d-block">Radiant</span></h1>
                      <p className="w-50">We've directed the most influencial brand of this era to ensure it will stay top notch. </p>
                    </a></div>
                </div>
              </li>
              <li className="glide__slide">
                <div className="jumbotron jumbotron-fluid vh-100 d-flex align-items-end">
                  <div className="bg o-8" style={{backgroundImage: `url(${Slide})` }}  />
                  <div className="container-fluid py-6"><a className="tilt no-link" href="project-single.html">
                      <h6>Branding</h6>
                      <h1 className="massive"><span className="d-block">Diamond</span><span className="d-block">Serenity</span></h1>
                    </a></div>
                </div>
              </li>
              <li className="glide__slide">
                <div className="jumbotron jumbotron-fluid vh-100 d-flex align-items-end">
                  <div className="bg o-2" style={{backgroundImage: `url(${Slide})` }}  />
                  <div className="container-fluid py-6"><a className="tilt no-link" href="project-single.html">
                      <h6>Product Design</h6>
                      <h1 className="massive"> <span className="d-block">Skulls</span><span className="d-block">Are </span><span className="d-block">Flexible</span></h1>
                    </a></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            <div className="glide__bullet" data-glide-dir="=0">1</div>
            <div className="glide__bullet" data-glide-dir="=1">2</div>
            <div className="glide__bullet" data-glide-dir="=2">3</div>
            <div className="glide__bullet" data-glide-dir="=3">4</div>
            <div className="glide__bullet total">4</div>
          </div>
        </div>
      </main>
   )
 }
}

export default Home