import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_5nqt99v",
        "template_uf56ili",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          form.current.reset();
          formMess.innerHTML = "<p class='success'> Message envoyé ! </p>";
          setTimeout(() => (formMess.innerHTML = ""), 4000);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p class='error'> Une erreur s'est produite veuillez réessayer ! </p>";
          setTimeout(() => (formMess.innerHTML = ""), 4000);
        }
      );
  };

  return (
    <div className="form-container">
        <h1 className="title-contact">contactez moi</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>message</label>
        <textarea name="message" />
        <input type="submit" value="envoyer" required autoComplete="off" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default ContactForm;
