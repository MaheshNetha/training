import React from "react";
import {Card } from 'react-bootstrap'
import './Card.css'

const SharedCard = (props) => {

    const {title,subtitle} = props;


     return(
         <>

<Card className="shared-card">
  <Card.Header className="header">
  <Card.Title className="title">  {title} </Card.Title>
    <Card.Subtitle className="mb-2 "> <small>{subtitle} </small> </Card.Subtitle>
  </Card.Header>
  <Card.Body>
          
       {props.children}

  </Card.Body>
</Card>

         </>
     )

}


export default SharedCard;