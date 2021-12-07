import React from "react";
import './Login.css'
import { Tabs  ,Tab ,Form ,Card ,Alert} from 'react-bootstrap';
import Button from "@restart/ui/esm/Button";

import ModalC from "../Modal/Modal";
const Login =()=>{

    const singupFooter =()=>{
       return <small>Accept <a href="#">Terms of use</a> and <a href="#">Privacy policy</a></small>
    }

    const OTPValidate = ()=>{

        return(
            <Card >
                <Alert className="alert alert-light d-flex align-items-center" role="alert">
                <i className="fas fa-info p-1 bg-light p-1"></i>
  
  <div>
  <Card.Text className="text-sm text-success" >
             4 Digit OTP sent to your mobile number
    </Card.Text>
  </div>
</Alert>
  <Card.Body>
    <Card.Title className="otp-heading">Enter OTP</Card.Title>
    <hr className="w-25"/>
    
    <Card.Text className="text-sm">
      Please Enter the 4 digit verification received to your registered mobile number
    </Card.Text>

    <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                 <input class="m-2 text-center form-control form-control-user rounded" type="text" id="first" maxlength="1" /> 
                 <input class="m-2 text-center form-control form-control-user rounded" type="text" id="second" maxlength="1" /> 
                 <input class="m-2 text-center form-control form-control-user rounded" type="text" id="third" maxlength="1" />
                 <input class="m-2 text-center form-control form-control-user rounded" type="text" id="fourth" maxlength="1" /> 
                  
              
   
    </div>
    <Button  className="btn btn-primary btn-user btn-block">
                                    VALIDATE
                 </Button>
                 <Card.Text className="text-sm text-primary pt-1" >
            Din't get code ?  <a href="#"> Resend</a>
    </Card.Text>

   
  </Card.Body>
  <Alert className="alert alert-light d-flex align-items-center" role="alert">
                <i className="fas fa-info p-1 bg-light p-1 text-danger"></i>
  
  <div>
  <Card.Text className="text-sm text-danger" >
            Invalid OTP Entered
    </Card.Text>
  </div>
</Alert>
</Card>
        )
    }
    
    return (
        <>
        
        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image align-items-center">
                        <div className="login m-auto">
                        <div className="my-5 text-center text-xl-center">
                                <h4 className=" fw-bolder mb-2 pt-5">We Make it easy for everyone to invest</h4>
                                <p className="lead fw-normal text-white mb-4">Ensuring ease of inversters Across Plotform</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn bg-light text-dark btn-sm px-4 " href="#!"> More <i className="fas  text-grey fa-sm fa-greater-than"></i></a>
                                </div>
                            </div>
    </div>
                    </div>
                    <div className="col-lg-6">
                       
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>

                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="SIGNIN">
  <form className="user form-container">
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-user"
                                        id="mobile" aria-describedby="Mobile"
                                        placeholder="Enter Mobile Number"></input>
                                </div>
                               
                               
                                <a href="index.html" className="btn btn-primary btn-user btn-block">
                                SIGNIN
                                </a>
                                <hr/>
                               
                            </form>
                            <div className="text-center">
                              <span className="text-primary">Dont't have account with us? </span>  <a className="small" href="register.html"><b className="text-primary">  Signup</b></a>
                            </div>
  </Tab>
  <Tab eventKey="profile" title="SIGNUP">
  <form className="user form-container">

  <div className="form-group">
                                    <input type="email" className="form-control form-control-user"
                                        id="email" aria-describedby="email"
                                        placeholder="Email Address"></input>
                                </div>
                               <div className="form-group mobile-grid">
                               <input type="text" className="form-control form-control-user"
                                        id="country-code" aria-describedby="Mobile"
                                        placeholder="+91" ></input>

                                    <input type="text" className="form-control form-control-user"
                                        id="mobileNumber" aria-describedby="Mobile"
                                        placeholder="Mobile Number"></input>
                                </div>

                               
                               
                               
                                <a href="index.html" className="btn btn-primary btn-user btn-block">
                                    SUBMIT
                                </a>
                                <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={singupFooter()} /></Form.Group>
                                <hr/>
                               
                            </form>
  </Tab>
  <Tab eventKey="otp" title="OTP">
      <OTPValidate />
  </Tab>
 
</Tabs>
                            
                           
                            <ModalC />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;