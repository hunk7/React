import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <div id="page">
        <nav className="fh5co-nav" role="navigation">
          <div className="container">
            <div className="row">
              <div className="col-xs-2 text-left">
                <div id="fh5co-logo"><a href="index.html"><strong>Scholarship</strong><span>.</span></a></div>
              </div>
              <div className="col-xs-10 text-right menu-1">
                <ul>
                  <li className="active"><a href="index.html">Home</a></li>
                  <li className="has-dropdown">
                    <a href="#">info</a>
                    <ul className="dropdown">
                      <li><a href="info.pdf">Reference</a></li>
                      <li><a href="1.html">Punjabrao</a></li>
                      <li><a href="2.html">EBC</a></li>
                      <li><a href="3.html">Ahindi</a></li>
                      <li><a href="4.html">Merit-cum-Means</a></li>
                      <li><a href="5.html">Swadhar-Yojna</a></li>
                      <li><a href="6.html">SC & ST</a></li>
                      <li><a href="https://mahadbt.net.in/mahadbt-customer-care-number-helpline-tollfree-number/">help</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">about</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
            
          </div>
        </nav>

        <header id="fh5co-header" className="fh5co-cover" role="banner">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-7 text-left">
                <div className="display-t">
                  <div className="display-tc animate-box" data-animate-effect="fadeInUp">
                    <h1 className="mb30">Find All your Scholarships details here.</h1>
                    <p>
                      <a href="contact.html" target="_blank" className="btn btn-primary">Send us mail</a>
                    </p>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    </div>
      <Link to="/Content">
        <button variant="outlined">
          Content
        </button>
      </Link>
    </div>
  );
}

export default Header;
