import React from "react";
import loginrightimg from '../../images/loginrightimg.png';
import GoogleIcon from '../../images/google-icon.svg';
import { Tabs  ,Tab ,Form ,Card ,Alert} from 'react-bootstrap';

import TextError from "../../Shared/TextError/TextError";


const Signin = (props)=>{


    const Otp =()=>{
         return (
            <>
            <h1 class="mb-4"><span class="headh1">Enter OTP</span></h1>
            <p class="mb-4">Please enter the 4-digit verification code received on your registered mobile</p>
            <p>Enter Your OTP <span class="txt-red">*</span></p>
            <div class="row gx-3">
                <div class="form-group col-3">
                    <input type="text" class="form-control text-center" id="otp1" placeholder="2" />
                </div>
                <div class="form-group col-3">
                    <input type="text" class="form-control text-center" id="otp2" placeholder="2" />
                </div>
                <div class="form-group col-3">
                    <input type="text" class="form-control text-center" id="otp3" placeholder="2" />
                </div>
                <div class="form-group col-3">
                    <input type="text" class="form-control text-center" id="otp4" placeholder="2" />
                </div>

            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-default form-control">Sign IN</button>
            </div>
            <div class="form-group text-left">
                <p>Didn't get the code?  <a href="#signup">Resend</a></p>
            </div>
        </>
         )
    }
 return (
     <>
      <div class="container my-4 mx-auto leftsidebox">
            
            <div class="row">
                <div class="col-md-6 loginimg">
                    <div class="loginlefttxt">
                        <h4 class="welcome-text">
                            We make it easy for everyone
                            <br/> to invest
                        </h4>
                        <p>Ensuring Ease of Investors Across Platforms</p>
                        <button class="morebtn">More <i class="fa fa-angle-right" aria-hidden="true"></i> </button>
                        <div class="rightimg">
                            <img src={loginrightimg} />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 signupform">
                <Tabs defaultActiveKey="signin" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="signin" title="SIGNIN">
  <div id="signin" class="container tab-pane active p-0">
                            <div class="row">
                                <div class="col-md-12 ">
                                    <form class="mt-3">
                                        <div class="sign-in-fields">
                                            <div class="form-group">
                                                <input type="text" class="form-control required" id="Inputmobile" aria-describedby="mobile" placeholder="Mobile No" />
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-default form-control">Sign IN</button>
                                            </div>
                                            <div class="form-group text-center">
                                                <p>Sign in Using <a href="#"><img alt="google" src={GoogleIcon} class="img ms-3" /></a></p>
                                            </div>
                                            <div class="form-group text-center">
                                                <p>Don't have account with us?  <a href="#signup">Sign Up</a></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
  </Tab>
  <Tab eventKey="signup" title="SIGNUP">
  <div id="signup" class="container tab-pane fade p-0">
                            <div class="row">
                                <div class="col-md-12 ">
                                    <form class="mt-3">
                                        <div class="sign-in-fields">
                                            <div class="form-group">
                                                <input type="email" class="form-control required" id="Inputemail" aria-describedby="email" placeholder="Email" />
                                            </div>
                                            <div class="row gx-2">
                                                <div class="form-group col-2 ">
                                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="+91" />
                                                </div>
                                                <div class="form-group col-10">
                                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Mobile No" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                    <label class="form-check-label" for="exampleCheck1">I Accept the <u>Terms of Use</u> and <u>Privacy Policy</u></label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-default form-control">Submit</button>
                                            </div>

                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>
  </Tab>
  <Tab eventKey="otp" title="OTP">

      {Otp()}
  </Tab>
 
</Tabs>
                   

                  
                </div>
            </div>
        
        </div>
     </>
 )

}


export default Signin;