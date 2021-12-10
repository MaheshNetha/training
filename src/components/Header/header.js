
import React from "react"
import './header.css'

const Header = ()=>{

    return(
        <>
        <div class="header">
            <nav class="navbar navbar-expand-md navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> <img src="../../images/Kfintech-logo.svg" alt="" class="logo"/> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-md-end mobilenav" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Mutual Funds</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">NPS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">IPO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Bonds</a>
                            </li>
                            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bonds
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>
        </div>
</nav>
        </div>
        </>
    )

}

export default Header;