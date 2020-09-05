import React from 'react';
import '../Style/navigation.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/doctor.png'
const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation__adBar">
                <h1 className="navigation__adBar__text" >
                    DARMOWA DOSTAWA OD 400 ZŁ NA TERENIE POLSKI
                    </h1>

            </div>
            <div className="navigation__navBar">

                <div className="navigation__navBar__logoContainer">
                    <img src={logo} alt="logo" className="navigation__navBar__logoContainer__logo" />
                    <NavLink to="/" className="navigation__navBar__logoContainer__logoHeader">Życie na bombie</NavLink>
                </div>

                <ul className='navigation__navBar__navList'>

                    <li className='navigation__navBar__navList__listElements'>
                        <NavLink to='/cennik' className='navigation__navBar__navList__listElements__element'>Produkty</NavLink>
                    </li>
                    <li className='navigation__navBar__navList__listElements'>
                        <NavLink to='/cennik' className='navigation__navBar__navList__listElements__element'>Jak Zamówić</NavLink>
                    </li>
                    <li className='navigation__navBar__navList__listElements'>
                        <NavLink to='/cennik' className='navigation__navBar__navList__listElements__element'>Blog</NavLink>
                    </li>
                    <li className='navigation__navBar__navList__listElements'>
                        <NavLink to='/cennik' className='navigation__navBar__navList__listElements__element'>Kontakt</NavLink>
                    </li>
                </ul>

            </div>

        </nav>
    );
}

export default Navigation
