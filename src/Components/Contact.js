import React, { useState } from "react";
import "../Style/contact.css";

const Contact = () => {
    const [name, setName] = useState("Nie wypełniono");
    const [email, setEmail] = useState("Nie wypełniono");
    const [topic, setTopic] = useState("Brak tematu");
    const [message, setMessage] = useState("Brak tresci");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name);
        console.log(email);
        console.log(topic);
        console.log(message);
    };

    return (
        <div className="contact">
            <form
                className="contact__form"
                method="POST"
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label htmlFor="name" className="contact__form__label">
                        Imie i nazwisko (wymagane)
                    </label>
                    <br />
                    <input
                        type="text"
                        id="name"
                        className="contact__form__input"
                        placeholder="Imie i nazwisko (wymagane)"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label
                        htmlFor="exampleInputEmail1"
                        className="contact__form__label"
                    >
                        Adres e-mail (wymagane)
                    </label>
                    <br />
                    <input
                        type="email"
                        className="contact__form__input"
                        placeholder="Adres e-mail (wymagane)"
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
                        type="topic"
                        className="contact__form__input"
                        placeholder="Temat"
                        onChange={(e) => setTopic(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="contact__form__label">
                        Treść wiadomości
                    </label>{" "}
                    <br />
                    <textarea
                        className="contact__form__input"
                        placeholder="Treść wiadomości"
                        rows="5"
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    Wyślij
                </button>
            </form>
        </div>
    );
};

export default Contact;
