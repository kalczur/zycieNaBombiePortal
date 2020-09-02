import React from 'react';
import bgc from '../images/strzykawka.jpg'
import '../Style/section.css'
const Section = () => {
    return (
        <div className="section">
            <div className='section__adBanner'>
                <h1 className="section__adBanner__header">Zycie Na Bombie</h1>
                <h2 className="section__adBanner__header__about">Witamy na stronie poświęconej środkom anabolicznym. </h2>
            </div>
            <div className="section__about">
                <h2 className="section__about__header">PRODUKTY, SPRAWDZONE <br /> PRZEZ SPORTOWCOW</h2>
                <div className="ection__about__containerText">

                </div>
            </div>
        </div >
    );
}

export default Section;