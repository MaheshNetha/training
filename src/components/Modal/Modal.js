import React , {useState} from "react";
import { Button ,Alert ,Modal} from "react-bootstrap";

function ModalC(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Confirm
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className="btn-primary" closeButton>
            <Modal.Title><h4>Status</h4></Modal.Title>
          </Modal.Header>
          <Modal.Body>
         
  <Alert  variant='success'>
  <i className="fas fa-check p-1  p-1"></i>  Your Details Saved Successfully
  </Alert>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="btn btn-primary btn-user btn-block" onClick={handleClose}>
              OK
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    )
  }
  
export default ModalC;