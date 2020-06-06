import React from 'react';


class Banner extends React.Component{
  render(){
    return(
      <>
              <section id="banner" className="banner">
              <div className="bg-color">
              <nav className="navbar navbar-default navbar-fixed-top top-nav-collapse">
               <div className="container">
               <div className="col-md-12">
                <div className="navbar-header">

                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">

                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#"><img src="asserts/img/logo.png" className="img-responsive"/></a>
                </div>
                <div className="collapse navbar-collapse navbar-right" id="myNavbar">
                <ul className="nav navbar-nav">
                <li className="active"><a href="#admin">Login</a></li>
                <li className="active"><a href="#banner">Home</a></li>
                <li className=""><a href="#service">Services</a></li>
                <li className=""><a href="#about">About</a></li>
                <li className=""><a href="#testimonial">Testimonial</a></li>
                <li className=""><a href="#contact">Contact</a></li>
                </ul>
                </div>
                </div>
                </div>
                </nav>
                <div className="container">
                <div className="row">
                <div className="banner-info">
                <div className="banner-logo text-center">
                <img src="asserts/img/logo.png" className="img-responsive"/>
                </div>
                <div className="banner-text text-center">
                <h1 className="white">Healthcare at your desk!!</h1>
                <p>stretch and move at your desk to maintain your health in good condition.</p>
                <a href="#contact" className="btn btn-appoint">Make an Appointment.</a>
                </div>
                <div className="overlay-detail text-center">
                <a href="#service"><i className="fa fa-angle-down"></i></a>
                </div>
                </div>
                </div>
                </div>
                </div>
                </section>

   </>
    );
  }
}


export default Banner;
