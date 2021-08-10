import React, { Component } from "react";
import ReactDOM from 'react-dom';

import HeroContact from '../images/contact.jpg';


export class Contact extends Component {
 render() {
   return (
  	 <main>
        <section className="jumbotron jumbotron-fluid pb-0 bg-dark">
          <div className="bg o-5" style={{backgroundImage: `url(${HeroContact})`}} />
          <div className="container text-white py-5">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1 className="massive in-left"><span id="typed" /><span id="typed-strings"><span>Liên hệ</span><span>Contact</span><span>접촉</span><span>Kāhea</span><span>Kontakt</span></span></h1>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-5 offset-lg-2">
                <p className="in-top">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2 className="mt-5">Write To Us</h2>
                <form className="mt-4 mb-n10">
                  <div className="form-group"><input className="form-control" id="name" type="text" placeholder="John Doe" /></div>
                  <div className="form-group"><input className="form-control" id="email" type="email" placeholder="Email" /></div>
                  <div className="form-group"><textarea className="form-control" id="message" rows={8} placeholder="Message" defaultValue={""} /></div>
                  <button className="btn-lg btn-dark" type="button">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-10 border-bottom pb-6">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2>Projects done right <br /> when schedules are tight.</h2>
                <div className="border-bottom my-5" />
              </div>
            </div>
            <div className="row size-sm">
              <div className="col-lg-4 offset-lg-2">
                <p><strong>Neoto HQ</strong><br />801 Grim Avenue<br />California CA 02110</p>
              </div>
              <div className="col-lg-1 offset-lg-1">
                <p> <strong>Phone<br />Mail<br />Twitter<br /></strong></p>
              </div>
              <div className="col-lg-2 text-right">
                <p>022 15 11 65 46<br />your@email.com<br />@neototemplate</p>
              </div>
            </div>
          </div>
        </section>
      </main>

   )
 }
}

export default Contact