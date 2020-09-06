import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/instagram.css'
const Instagram = () => {
    return (
        <a href='https://www.instagram.com/zycie.na.bombie/' target="_blank" className="instagram">

            <i className="fab fa-instagram"></i>
            <p className="instagram__text" >Sprawdz</p>

        </a>
    );
}

export default Instagram;