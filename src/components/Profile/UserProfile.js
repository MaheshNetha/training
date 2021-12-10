import React from "react";

const UserProfile =(props)=>{

    return(
        <>
        <div class="container mx-auto mt-4 leftsidebox">
            <div class="row">
                <div class="headerdiv">
                    <h3>User Profile Details  </h3>
                    <h5>User Details include Name, PAN, Email, Mobile Number etc.</h5>
                </div>
                <div class="col-md-12 form-div">
                    <div class="row mt-3">
                        <h4>Basic Information</h4>
                    </div>
                    <div class="row">
                        <div class="valid-feedback">
                            PAN details are available in our records
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="col-md-11 row">
                            <div class="form-floating col-md-4">
                                <input type="text" class="form-control" id="txtName" placeholder="Name" name="Name" required />
                                <label for="txtName">Name <span class="txt-red">*</span></label>
                            </div>

                            <div class="form-floating col-md-4">
                                <input type="text" class="form-control is-valid" id="txtPAN" placeholder="PAN" name="PAN" required />
                                <label for="txtPAN">PAN <span class="txt-red">*</span></label>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="col-md-11 row">
                            <div class="form-floating col-md-4">
                                <input type="text" class="form-control successborder" id="txtEmail" placeholder="Email" name="Email" required />
                                <label for="txtEmail">Email<span class="txt-red">*</span></label>
                            </div>

                            <div class="form-floating col-md-4">
                                <input type="text" class="form-control successborder" id="txtMobile" placeholder="Mobile" name="Mobile" required />
                                <label for="txtMobile">Mobile <span class="txt-red">*</span></label>
                            </div>
                            <div class="form-floating col-md-4">
                                <input type="text" class="form-control successborder" id="txtUPIID" placeholder="UPI ID" name="UPIID" required />
                                <label for="txtUPIID">UPI ID <span class="txt-red">*</span></label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="col-12 text-end mt-3">
                        <button type="button" name="button" class="btn btn-border-blue">Create Demat</button>
                    </div>

                    <div class="row mt-3">
                        <h4>Demat Details</h4>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="col-md-11 row">
                            <div class="form-floating col-md-4">
                                <input type="text" class="form-control" id="txtClientID" placeholder="Client ID" name="Client ID" required />
                                <label for="txtClientID">Client ID <span class="txt-red">*</span></label>
                            </div>

                            <div class="form-floating col-md-4">
                                <input type="text" class="form-control" id="txtDPID" placeholder="DP ID" name="DPID" required />
                                <label for="txtDPID">DP ID </label>
                            </div>

                        </div>
                        <div class="text-end col-md-1">
                            <button type="button" name="button" class="btn delbtn"><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <hr />
                    <div class="col-12 text-end mt-3">
                        <button type="button" name="button" class="btn btn-border-blue"><span class="txt-red"> + </span> Add Demat</button>
                    </div>

                    <div class="row mt-3">
                        <h4>Bank Details</h4>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="col-md-11 row">
                            <div class="form-floating col-md-4">
                                <input type="text" class="form-control" id="txtBankName" placeholder="Bank Name" name="Bank Name" required />
                                <label for="txtBankName">Bank Name</label>
                            </div>

                            <div class="form-floating col-md-4">
                                <input type="text" class="form-control" id="txtAccountNumber" placeholder="Account Number" name="Account Number" required />
                                <label for="txtAccountNumber">Account Number</label>
                            </div>
                            <div class="form-floating col-md-4 mb-1">
                                <input type="text" class="form-control" id="txtIFSC" placeholder="IFSC" name="IFSC" required />
                                <label for="txtIFSC">IFSC</label>
                            </div>
                        </div>
                        <div class="col-md-1 text-end">
                            <button type="button" name="button" class="btn delbtn"><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <hr class="hide" />
                    <div class="d-flex align-items-center">
                        <div class="col-md-11 row">
                            <div class="form-floating col-md-4">
                                <input type="text" class="form-control" id="txtBankName" placeholder="Bank Name" name="Bank Name" required />
                                <label for="txtBankName">Bank Name</label>
                            </div>

                            <div class="form-floating col-md-4">
                                <input type="text" class="form-control" id="txtAccountNumber" placeholder="Account Number" name="Account Number" required />
                                <label for="txtAccountNumber">Account Number</label>
                            </div>
                            <div class="form-floating col-md-4">
                                <input type="text" class="form-control" id="txtIFSC" placeholder="IFSC" name="IFSC" required />
                                <label for="txtIFSC">IFSC</label>
                            </div>
                        </div>
                        <div class="col-md-1 text-end">
                            <button type="button" name="button" class="btn delbtn"><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <div class="col-12 text-end mt-3">
                        <button type="button" name="button" class="btn btn-border-blue"><span class="txt-red"> + </span> Add Account</button>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between my-3">
                        <button type="button" name="button" class="btn btn-default"><span class="me-2"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>Back</button>
                        <button type="button" name="button" class="btn btn-default" data-bs-toggle="modal" data-bs-target="#SaveModal"> Save Details</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserProfile;