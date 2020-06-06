import React from 'react';


class Doctor extends React.Component{
  render(){
    return(
         <>               
      
                    <section id="doctor-team" class="section-padding">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                        <h2 class="ser-title">Meet Our Doctors!</h2>
                        <hr class="botm-line"/>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-6">
                        <div class="thumbnail">
                            <marquee scrollamount="10"
                            direction="left"
                            behavior ="scroll">
                                <img src="asserts/img/doctor1.jpg" alt="..." class="team-img"/>
                            </marquee>
                            <div class="caption">
                            <h3>Jessica Wally</h3>
                            <p>Doctor</p>
                            <ul class="list-inline">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-6">
                        <div class="thumbnail">
                        <marquee scrollamount="10"
                            direction="left"
                            behavior ="scroll">
                            <img src="asserts/img/doctor2.jpg" alt="..." class="team-img"/>
                        </marquee>
                            <div class="caption">
                            <h3>Iai Donas</h3>
                            <p>Doctor</p>
                            <ul class="list-inline">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-6">
                        <div class="thumbnail">
                        <marquee scrollamount="10"
                            direction="left"
                            behavior ="scroll">
                            <img src="asserts/img/doctor3.jpg" alt="..." class="team-img"/>
                        </marquee>
                            <div class="caption">
                            <h3>Amanda Denyl</h3>
                            <p>Doctor</p>
                            <ul class="list-inline">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-6">
                        <div class="thumbnail">
                        <marquee scrollamount="10"
                            direction="left"
                            behavior ="scroll">
                            <img src="asserts/img/doctor4.jpg" alt="..." class="team-img"/>
                            </marquee>
                            <div class="caption">
                            <h3>Jason Davis</h3>
                            <p>Doctor</p>
                            <ul class="list-inline">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            </ul>
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
export default Doctor;        