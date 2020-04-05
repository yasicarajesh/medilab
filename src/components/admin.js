import React from 'react';


class Admin extends React.Component{
  render(){
    return(
         <>

                    <section id="admin" class="section-padding">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                        <h2 class="ser-title">Admin setting</h2>
                        <hr class="botm-line"/>
                        </div>

                        <div class="col-md-8 col-sm-8 marb20">
                        <div class="contact-info">
                         <i class="user icon"></i>

                            <h3 class="cnt-ttl"><center>ADMINISTRATOR</center></h3>
                            <h3 class="cnt-ttl"><center>Please sigin in to get access</center></h3>
                            <div class="space"></div>
                            <div id="sendmessage">You have signed in</div>
                            <div id="errormessage"></div>
                            <form action="" method="post" role="form" class="contactForm">

                            <div class="form-group">
                                <input type="email" class="form-control br-radius-zero" name="email" id="email" placeholder="Your Email Address" data-rule="email" data-msg="Please enter a valid email" />
                                <div class="validation"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control br-radius-zero" name="Password" id="Password" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of password" />
                                <div class="validation"></div>
                            </div>

                            <div class="form-action">
                                <button type="submit" class="btn btn-form">Signin</button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
    </>
    );
  }
}
export default Admin;
