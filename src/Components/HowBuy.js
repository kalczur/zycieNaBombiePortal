import React from 'react';
import '../Style/howBuy.css';
const HowBuy = () => {
  return (
    <div className="howBuy">
      <h1 className="component-header">Jak Zamówić Produkty</h1>
      <div className="howBuy__container">
        <ul className="howBuy__container__list">
          <li className="howBuy__container__list__element">
            <p>Zapoznaj się z naszym asortymentem i wybierz interesujące Cię produkty.</p>
          </li>
          <li className="howBuy__container__list__element">
            <p>
              Jeżeli szukasz czegoś czego nie znalazłeś na naszej stronie, napisz do nas maila lub skontaktuj się
              poprzez formularz kontaktowy,bardzo prawdopodobne że mimo wszystko będziemy w stanie pomóc.
            </p>
          </li>
          <li className="howBuy__container__list__element">
            <p>
              {' '}
              Napisz do nas maila lub skorzystaj z formularza kontaktowego w celu złożenia zamówienia.W odpowiedzi
              zwrotnej otrzymasz pełną informację o dostępności produktów które Cię interesują, łącznej kwocie
              zamówienia, okresie realizacji zamówienia oraz danymi niezbędnymi do zrealizowania płatności.
            </p>
          </li>
          <li className="howBuy__container__list__element">
            <p>
              Po zaksięgowaniu przelewu otrzymujesz od nas informację zwrotną z potwierdzeniem finalizacji zamówienia
              oraz numerem przesyłki byś mógł śledzić swoje zamówienie na bieżąco.
            </p>
          </li>
          <li className="howBuy__container__list__element">
            <p>Realizujemy także płatności w walutach obcych (Euro, GBP)</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowBuy;
