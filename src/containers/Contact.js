import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { connect } from "react-redux";
import { showAlert } from "../actions/alert";
import * as Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const Contact = ({ showAlert }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setLoading(true);
    axios
      .post(
        `http://178.62.198.136/api/contacts/`,
        { name, email, subject, message },
        config
      )
      .then((res) => {
        showAlert("Message Sent", "success");
        setLoading(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        showAlert("Error with Sending Message", "error");
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };

  return (
    <div className="contact">
      <Helmet>
        <title>Arte - Contact</title>
        <meta name="description" content="Contact us" />
      </Helmet>
      <form className="contact__form" onSubmit={(e) => onSubmit(e)}>
        <label className="contact__form__label" htmlFor="name">
          Name*
        </label>
        <input
          className="contact__form__input"
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={(e) => onChange(e)}
          value={name}
          required
        />
        <label className="contact__form__label" htmlFor="email">
          Email*
        </label>
        <input
          className="contact__form__input"
          name="email"
          type="email"
          placeholder="xyz@gmail.com"
          onChange={(e) => onChange(e)}
          value={email}
          required
        />
        <label className="contact__form__label" htmlFor="subject">
          Subject*
        </label>
        <input
          className="contact__form__input"
          name="subject"
          type="text"
          placeholder="Buy Art"
          onChange={(e) => onChange(e)}
          value={subject}
          required
        />
        <label className="contact__form__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="contact__form__textarea"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          onChange={(e) => onChange(e)}
          value={message}
        />
        {loading ? (
          <div className="contact__form__loader">
            <Loader.TailSpin
              type="Oval"
              color="#f43a09"
              height={50}
              width={50}
            />
          </div>
        ) : (
          <button className="contact__form__button" htmltype="submit">
            Send
          </button>
        )}
      </form>
    </div>
  );
};

Contact.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

export default connect(null, { showAlert })(Contact);
