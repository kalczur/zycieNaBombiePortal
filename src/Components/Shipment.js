import React, { Component } from 'react';
import '../Style/shipment.css';
export default class Shipment extends Component {
  render() {
    return (
      <div className="shipment">
        <h1 className="shipment_component-header">WYSYŁKA</h1>

        <h2 className="shipment_component-description">
          Wszystkie zamówienia staramy się realizować w ciągu jednego dnia roboczego od zaksięgowania płatności.
          <br />
          <br />
          Jeżeli czas oczekiwania miałby się wydłużyć, dostajesz taką informację jeszcze przed opłaceniem zamówienia.
          <br />
          <br />
          Taka sytuacja może się zdarzyć najczęściej w przypadku gdy w zamówieniu występują produkty apteczne które nie
          zawsze są dostępne od ręki.
          <br />
          <br />
          Zamówienia na terenie Polski realizujemy poprzez firmę kurierską (najczęściej DPD) lub do paczkomatów InPost.
          Obsługujemy także wysyłki międzynarodowe, w takim wypadku prosimy o wcześniejszy kontakt w celu ustalenia czy
          dany kraj znajduje się na naszej liście wysyłkowej.
          <br />
          <br />
          <b>CENNIK WYSYŁKI</b>
          <br />
          <br />
          Kurier – 15zł Paczkomat – 10zł Kurier międzynarodowy – 50zł
          <br />
          <br />
          Dla zamówień na terenie Polski na kwotę powyżej 400zł wysyłka kurierem i na paczkomat bezpłatna!!!
        </h2>
      </div>
    );
  }
}
