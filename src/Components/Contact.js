import React, { useState } from 'react';
import '../Style/contact.css';

const Contact = () => {
  const [name, setName] = useState('Nie wypełniono');
  const [email, setEmail] = useState('Nie wypełniono');
  const [topic, setTopic] = useState('Brak tematu');
  const [message, setMessage] = useState('Brak tresci');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
    console.log(topic);
    console.log(message);
  };

  return (
    <div className="contact">
      <h1 className="howBuy__header">KONTAKT</h1>

      <b2 className="contact_description">
        Potrzebujesz pomocy, masz pytania związane z dopingiem? Napisz do nas, jesteśmy do Twojej dyspozycji.
        Odpowiadamy najszybciej jak to możliwe.
      </b2>
      <b2 className="contact_description">Skorzystaj z naszego formularza kontaktowego:</b2>

      <form className="contact__form" method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="contact__form__label">
            Imie i nazwisko (wymagane)
          </label>
          <br />
          <input
            type="text"
            id="name"
            className="contact__form__input"
            //placeholder="Imie i nazwisko (wymagane)"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="contact__form__label">
            Adres e-mail (wymagane)
          </label>
          <br />
          <input
            id="email"
            type="email"
            className="contact__form__input"
            //placeholder="Adres e-mail (wymagane)"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="topic" className="contact__form__label">
            Temat
          </label>
          <br />
          <input
            id="topic"
            type="text"
            className="contact__form__input"
            //placeholder="Temat"
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="contact__form__label">
            Treść wiadomości
          </label>
          <br />
          <textarea
            id="message"
            className="contact__form__input contact__form__message"
            //placeholder="Treść wiadomości"
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button className="contact__form__button">
          <span>Wyślij </span>
        </button>
      </form>

      <b2 className="contact_description">Lub napisz bezpośrednio na maila: Zycie.na.bombie@tutanota.com</b2>
      <b2 className="contact_description">Zapraszamy również do śledzenia nas na Instagramie:</b2>
      <b2 className="contact_description">
        <a href="https://www.instagram.com/zycie.na.bombie">instagram</a>
      </b2>
    </div>
  );
};

export default Contact;
