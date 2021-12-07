import React, { useEffect, useState } from "react";
import {Form,Row,Col,Button} from 'react-bootstrap'
import SharedCard from "../../Shared/Card/Card";
import './Profile.css'
const UserProfile = (props)=> {


    const [accounts, setaccounts] = useState([{name:'',accountNumber:'',ifsc:'',id:1}]);

    let handleChange = (i, e) => {
      let newaccounts = [...accounts];
      newaccounts[i][e.target.name] = e.target.value;
      setaccounts(newaccounts);
   }
      
  let addFormFields = () => {
      setaccounts([...accounts, {name:'',accountNumber:'',ifsc:'',id:++accounts.length}])
   }
  
  let removeFormFields = (i) => {
      let newaccounts = [...accounts];
      newaccounts.splice(i, 1);
      setaccounts(newaccounts)
  }
  
  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(accounts));
  }
  


    const changeBankName =()=>{

    }

    const renderAccounts = ()=>{
          
         return (
             <>
                {accounts?.map((account,index)=>{

                    return (
                    
                        <Row className="mb-3" key={account.id}>
                            <Col xs="auto">
      
      <Form.Group as={Col} controlId="formGridBankName">
       
      <Form.Control type="text" value={account.name} onChange={e => handleChange(index, e)}placeholder="Bank Name" />
      </Form.Group>
      </Col>
  
      <Col xs="auto">
      <Form.Group as={Col} controlId="formGridAccountNumber">
        <Form.Control type="text" value={account.accountNumber} onChange={e => handleChange(index, e)} placeholder="Account Number" />
      </Form.Group>
      </Col>
      <Col xs="auto">
  
      <Form.Group as={Col} className="d-inline-block" controlId="formGridIFSC">
        <Form.Control type="text" value={account.ifsc}  onChange={e => handleChange(index, e)} placeholder="IFSC" />
        
      </Form.Group>
      <Form.Group className="d-inline-block remove-btn" as={Col} controlId="formGridRemove">
      {
            index ? 
            <i class="fas fa-trash-alt text-danger btn btn-sm btn-light p-2" onClick={() => removeFormFields(index)} ></i>
            
            : null
          }
      </Form.Group>
     
      </Col>
     
      </Row>
                
                      
                    )
                    
                })}
             </>
         )
    }


    return (
        <>
        <SharedCard title="USER PROFILE DETAILS" subtitle="User details include PAN,Email,Mobile etc" >

        <Form>

  <Row className="mb-3">
  <Form.Label className="profile-lables">Basic Information </Form.Label>
  <Col xs="auto">
    <Form.Group as={Col} controlId="formGridName">
     
      <Form.Control type="text" placeholder="Enter Name" />
    </Form.Group>
    </Col>
    <Col xs="auto">
    <Form.Group as={Col} controlId="formGridPAN">
     
      <Form.Control type="text" placeholder="PAN" />
    </Form.Group>
    </Col>
  </Row>
  <Row className="mb-3">
  <Col xs="auto">
    <Form.Group as={Col} controlId="formGridEmail">
     
      <Form.Control type="text" placeholder="Enter Email" />
    </Form.Group>
    </Col>
    <Col xs="auto">
    <Form.Group as={Col} controlId="formGridMobile">
     
      <Form.Control type="text" placeholder="Mobile" />
    </Form.Group>
    </Col>
    <Col xs="auto">
    <Form.Group as={Col} controlId="formGridMobile">
     
      <Form.Control type="text" placeholder="UPI ID" />
    </Form.Group>
    </Col>

    

  </Row>

  <div class="modal-footer">
          <button type="button" class="btn btn-primary" onClick={() => console.log("demat")} > CREAT DEMAT</button>
        </div>


  <hr/>
  <Row className="mb-3">

  <Form.Label className="profile-lables">Bank Accounts </Form.Label> 

               {renderAccounts()}

              
  </Row>
  <div class="modal-footer">
          <button type="button" class="btn btn-primary" onClick={() => addFormFields()} > 
          <i class="fas fa-plus " ></i> ADD ACCOUNT</button>
        </div>
        
  
<hr/>
   
</Form>
        </SharedCard>
        
        </>
    )
}


export default UserProfile;