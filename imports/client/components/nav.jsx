import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand navbar-brand-image" href="/">
          <img src="images/logo.png" />
        </a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <a className="navbar-brand" href="/">
          Billings
        </a>

        <ul className="nav navbar-nav navbar-right">
          <li><a href="/">Workdays</a></li>
          <li><a href="/compagnies">Companies</a></li>
          <li><a href="/billings">Billings</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
