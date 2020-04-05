import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Banner from './components/banner';
import Admin from './components/admin';
import Service from './components/service';
import Cta from './components/cta-1';
import Doctor from './components/doctor';
import Test from './components/testimonial';
import Ct2 from './components/ct2';
import Contact from './components/contact';
import Footer from './components/footer';
import About from './components/about';



class App extends React.Component{
  render(){
    return(
      <>

      <Banner />
      <Admin/>
      <Service/>
      <Cta/>
      <Doctor/>
      <Test/>
      <Ct2/>
      <Contact/>
      <Footer/>
      <About/>


   </>
    );
  }
}


export default App;
