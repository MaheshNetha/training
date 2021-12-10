import React from "react";
import zerodha from '../../images/zerodha-1.svg'
import kotal from '../../images/Kotak1.svg'
import axis from '../../images/axis1.svg'

import angel from '../../images/angel1.svg'

import edel from '../../images/edelweiss1.svg'

import iifl from '../../images/iifl1.svg'
import icici from '../../images/icici1.svg'

import hdfc from '../../images/hdfc1.svg'



const BrokerList = ()=> {

     return (
             <>
             <div class="container mx-auto mt-4 leftsidebox">
            <div class="row">
                <div class="headerdiv">
                    <h3>Create Demat</h3>
                    <h5>Select a Broker to create a new Demat account</h5>
                </div>

                <div class="container mx-auto">
                    <div class="row dematicons p-4">
                        <div class="col-md-3">
                            <div class="card">
                                <div class="icons">
                                    <img src={zerodha} class="img" />
                                </div>
                                <div class="bluebg">
                                    <p>Account Opening Fee  - ₹ 500</p>
                                    <p>Brokerage   - 10%</p>
                                    <a href="#">More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="icons">
                                    <img src={kotal} class="img" />
                                </div>
                                <div class="bluebg">
                                    <p>Account Opening Fee  - ₹ 500</p>
                                    <p>Brokerage   - 10%</p>
                                    <a href="#">More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="icons">
                                    <img src={axis} class="img" />
                                </div>
                                <div class="bluebg">
                                    <p>Account Opening Fee  - ₹ 500</p>
                                    <p>Brokerage   - 10%</p>
                                    <a href="#">More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="icons">
                                    <img src={angel} class="img" />
                                </div>
                                <div class="bluebg">
                                    <p>Account Opening Fee  - ₹ 500</p>
                                    <p>Brokerage   - 10%</p>
                                    <a href="#">More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="icons">
                                    <img src={edel} class="img" />
                                </div>
                                <div class="bluebg">
                                    <p>Account Opening Fee  - ₹ 500</p>
                                    <p>Brokerage   - 10%</p>
                                    <a href="#">More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="icons">
                                    <img src={iifl} class="img" />
                                </div>
                                <div class="bluebg">
                                    <p>Account Opening Fee  - ₹ 500</p>
                                    <p>Brokerage   - 10%</p>
                                    <a href="#">More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="icons">
                                    <img src={icici} class="img" />
                                </div>
                                <div class="bluebg">
                                    <p>Account Opening Fee  - ₹ 500</p>
                                    <p>Brokerage   - 10%</p>
                                    <a href="#">More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="icons">
                                    <img src={hdfc} class="img" />
                                </div>

                                <div class="bluebg">
                                    <p>Account Opening Fee  - ₹ 500</p>
                                    <p>Brokerage   - 10%</p>
                                    <a href="#">More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="col-md-12 d-flex justify-content-between my-3">
                <button type="button" name="button" class="btn btn-default"><span class="me-2"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>Back</button>
                <button type="button" name="button" class="btn btn-default" data-bs-toggle="modal" data-bs-target="#SaveModal"> Save Details</button>
            </div>
        </div>
             </>
     )
}

export default BrokerList;