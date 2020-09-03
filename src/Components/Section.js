import React from 'react';
import bgc from '../images/strzykawka.jpg'
import '../Style/section.css'
const Section = () => {
    return (
        <div className="section">
            <div className='section__adBanner'>
                <h1 className="section__adBanner__header">Życie Na Bombie</h1>
                <h2 className="section__adBanner__about">Witamy na stronie poświęconej środkom anabolicznym. </h2>
            </div>
            <div className="section__about">
                <h2 className="section__about__header">PRODUKTY, SPRAWDZONE <br /> PRZEZ SPORTOWCOW</h2>
                <div className="section__about__container">
                    <div className="section__about__container__element">
                        <div className="section__about__container__element__photoOne"></div>
                        <p className="section__about__container__text">Stawiamy na najwyższą jakość i skuteczność środków w przystępnej cenie, a nasz asortyment pochodzi od sprawdzonych i pewnych dostawców, dzięki czemu klienci regularnie do nas wracają </p>
                    </div>
                    <div className="section__about__container__element">
                        <div className="section__about__container__element__photoTwo"></div>
                        <p className="section__about__container__text">Oferujemy nie tylko szeroką gamę środków anabolicznych i produktów pochodzenia aptecznego ale również wsparcie w doborze środków i ich dawkowania, czy chociażby rady odnośnie prawidłowego przeprowadzenia PCT (post cycle therapy) potocznie zwanego odblokiem. </p>
                    </div>
                    <div className="section__about__container__element">
                        <div className="section__about__container__element__photoThree"></div>
                        <p className="section__about__container__text">Naszymi klientami są nie tylko normalni użytkownicy siłowni i pasjonaci sportów ale również wyczynowi sportowcy.  </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Section;