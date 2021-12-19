
import React,{useState} from "react";
import {Outlet} from 'react-router-dom'
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

export default function AppLayout() {
    const [open, setOpen] = useState(false);
  
    return (
        <div class="container-fluid p-0">
           
            <Header/>

            
            <Outlet />
            <Footer/>
            </div>
    );
  }
  