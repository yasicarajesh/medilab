import React from 'react';
import Cookies from 'js-cookie';
import 'react-responsive-modal/styles.css';
import Chart from './chart';
import axios from 'axios';


class Admin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: Cookies.get('email'),
            modal: false,
            feedback: '',
            currentEmail: ''
        };
        axios.get('/queries/all').then(function(res) {
            this.setState({data: res.data});
            console.log(this.state.data);
        }.bind(this))
        .catch(function(err) {
            console.log(err);
        })
        console.log(this.state);
    }
  feedbackOpen(email) {
    console.log(email);
    this.setState({currentEmail: email});
    this.setState({modal: true});
  }
  onCloseModal() {
      this.setState({modal: false});
  }
  updateValue(event) {
    this.setState({feedback: event.target.value});
  }
  sendEmail() {
    axios.post('/email', {email: this.state.currentEmail, message: this.state.feedback}).then(function(res) {
            if(res.data.message) {
                this.onCloseModal();
            }
        }.bind(this))
        .catch(function(err) {
            console.log(err);
        })
  }
  render(){
      if(!this.state.username) {
        return(
            <>
   
                       <section id="admin" class="section-padding">
                       <div class="container">
                       <div class="row">
                           <div class="col-md-12">
                           <h2 class="ser-title">Employee setting</h2>
                           <hr class="botm-line"/>
                           </div>
   
                           <div class="col-md-8 col-sm-8 marb20">
                           <div class="contact-info">
                            <i class="user icon"></i>
   
                               <h3 class="cnt-ttl"><center>Employee Login</center></h3>
                               <h3 class="cnt-ttl"><center>Please sigin in to get access</center></h3>
                               <div class="space"></div>
                               <div id="sendmessage">You have signed in</div>
                               <div id="errormessage"></div>
                               <form method="post" role="form" action="/login" class="contactForm">
   
                               <div class="form-group">
                                   <input type="email" class="form-control br-radius-zero" name="email" id="email" placeholder="Your Email Address" data-rule="email" data-msg="Please enter a valid email" />
                                   <div class="validation"></div>
                               </div>
                               <div class="form-group">
                                   <input type="password" class="form-control br-radius-zero" name="password" id="Password" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of password" />
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
      else {
        return(
            <Chart></Chart>
        )
      }
  }
}
export default Admin;
