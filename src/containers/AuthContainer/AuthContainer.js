import React from "react"
import  './AuthContainer.css'

const AuthContainer = (props)=>{
        return (
            <>
            
    <div className="container">

<div className="row justify-content-center">

    <div className="col-xl-10 col-lg-12 col-md-9">
                {props.children}

    </div>
   

</div>

</div>
            </>
        )
}

export default AuthContainer;