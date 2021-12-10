import React from "react";

const Footer = (props)=>{

    return(
        <div class="footer">
        <div class="row">
            <div class="col-md-4 copy">© Copyright KFintech 2021 | All Rights Reserved.</div>
            <div class="col-md-6 socialmedia">
                <ul>
                    <li>Follow Us :</li>
                    <li><a href="#"><img src="../../images/facebook.svg" class="img" /></a></li>
                    <li><a href="#"><img src="../../images/linkedin.svg" class="img" /></a></li>
                    <li><a href="#"><img src="../../images/instagram.svg" class="img" /></a></li>
                    <li><a href="#"><img src="../../images/youtube.svg" class="img" /></a></li>
                    <li><a href="#"><img src="../../images/twitter.svg" class="img" /></a></li>

                </ul>
            </div>
            <div class="col-md-2"><img src="../../images/Here-For-You.svg" class="img" /></div>
        </div>
    </div>
    )
}

export default Footer;