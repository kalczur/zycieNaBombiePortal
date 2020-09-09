import React, { useState, useEffect } from 'react';
import '../Style/navigation.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/doctor.png';
const Navigation = () => {
    // useEffect(() => {
    //     const productsMenu = document.querySelector('.navigation__navBar__navList__listElements__elementButton');
    //     const productsDropMenu = document.querySelector('.navigation__navBar__navList__listElements__dropdownMenu');

<<<<<<< HEAD
  //     productsMenu.addEventListener('click', () => {
  //         productsDropMenu.classList.toggle('dropDownactive');
  //     })
  // });

  return (
    <nav className="navigation">
      <div className="navigation__adBar">
        <h1 className="navigation__adBar__text">DARMOWA DOSTAWA OD 400 ZŁ NA TERENIE POLSKI</h1>
      </div>
      <div className="navigation__navBar">
        <div className="navigation__navBar__logoContainer">
          <img src={logo} alt="logo" className="navigation__navBar__logoContainer__logo" />
          <NavLink to="/" className="navigation__navBar__logoContainer__logoHeader">
            Życie na bombie
          </NavLink>
        </div>

        <ul className="navigation__navBar__navList">
          <li className="navigation__navBar__navList__listElements">
            <button className="navigation__navBar__navList__listElements__elementButton">
              <span>Produkty</span>
            </button>
            <div className="navigation__navBar__navList__listElements__dropdownMenu">
              <NavLink
                className="navigation__navBar__navList__listElements__dropdownMenu_element"
                to="/products/maximus_pharmaceutical"
              >
                Maximus Pharma
=======
    //     productsMenu.addEventListener('click', () => {
    //         productsDropMenu.classList.toggle('dropDownactive');
    //     })
    // });


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



                <ul className="navigation__navBar__navList">
                    <li className="navigation__navBar__navList__listElements">
                        <button className="navigation__navBar__navList__listElements__elementButton">Produkty</button>
                        <div className="navigation__navBar__navList__listElements__dropdownMenu">
                            <NavLink
                                className="navigation__navBar__navList__listElements__dropdownMenu_element"
                                to="/products/maximus_pharmaceutical"
                            >
                                Maximus Pharma
>>>>>>> 4e4b451c8f182fdb9e101aa2aa27c38432169956
              </NavLink>
                            <NavLink
                                className="navigation__navBar__navList__listElements__dropdownMenu_element"
                                to="/products/peptydy_magnus"
                            >
                                Peptydy Magnus
              </NavLink>
                            <NavLink
                                className="navigation__navBar__navList__listElements__dropdownMenu_element"
                                to="/products/anabolix_labs"
                            >
                                SARMy Anabolix Labs
              </NavLink>
                            <NavLink
                                className="navigation__navBar__navList__listElements__dropdownMenu_element"
                                to="/products/apteczne"
                            >
                                Produkty Apteczne
              </NavLink>
                            <NavLink
                                className="navigation__navBar__navList__listElements__dropdownMenu_element"
                                to="/products/produkty_na_potencje"
                            >
                                Środki na potencję
              </NavLink>
                            <NavLink
                                className="navigation__navBar__navList__listElements__dropdownMenu_element"
                                to="/products/pozostale"
                            >
                                Pozostałe
              </NavLink>
                        </div>
                    </li>
                    <li className="navigation__navBar__navList__listElements">
                        <NavLink to="/jakZamowic" className="navigation__navBar__navList__listElements__element">
                            Jak Zamówić
            </NavLink>
<<<<<<< HEAD
          </li>
          <li className="navigation__navBar__navList__listElements">
            <NavLink to="/wysylka" className="navigation__navBar__navList__listElements__element">
              Wysyłka
            </NavLink>
          </li>
          <li className="navigation__navBar__navList__listElements">
            <NavLink to="/blog" className="navigation__navBar__navList__listElements__element">
              Blog
=======
                    </li>
                    <li className="navigation__navBar__navList__listElements">
                        <NavLink to="/blog" className="navigation__navBar__navList__listElements__element">
                            Blog
>>>>>>> 4e4b451c8f182fdb9e101aa2aa27c38432169956
            </NavLink>
                    </li>
                    <li className="navigation__navBar__navList__listElements">
                        <NavLink to="/kontakt" className="navigation__navBar__navList__listElements__element">
                            Kontakt
            </NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Navigation;
