import React, { Component } from 'react';
import "./style.css";
import MCLogoLockup from "../../assets/icons/logo-lockup.svg"
import MenuIcon from "../../assets/icons/menu.svg"
import { Link } from 'react-router-dom'; 

const MainHeader = () => {
   
        return (
            <div>
                  <Link to="/">
                  <div className='main-header-container'>
                <img src={MenuIcon} className='mc-logo-header' />
                <img src={MCLogoLockup} className='mc-logo-header' />
                </div>
                </Link>
            </div>
        )
    }


export default MainHeader