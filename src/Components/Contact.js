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
      <h1 className="contact_component-header">KONTAKT</h1>

      <h2 className="component-description">
        Potrzebujesz pomocy, masz pytania związane z dopingiem? <br />
        Napisz do nas, jesteśmy do Twojej dyspozycji.
        <br />
        Odpowiadamy najszybciej jak to możliwe.
      </h2>
      <h2 className="component-description">Skorzystaj z naszego formularza kontaktowego:</h2>

      <form className="contact__form" method="POST" onSubmit={handleSubmit}>
        <div className="contact__form__group">
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

        <div className="contact__form__group">
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

        <div className="contact__form__group">
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

        <div className="contact__form__group">
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
      <h2 className="component-description">
        Lub napisz bezpośrednio na maila: Zycie.na.bombie@tutanota.com <br />
        Zapraszamy również do śledzenia nas na Instagramie: <br />
        <br /> <a href="https://www.instagram.com/zycie.na.bombie/"><button className='component-description__button'>Życie Na Bombie</button></a>
      </h2>
    </div>
  );
};

export default Contact;
