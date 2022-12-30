import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { showAlert } from "../actions/alert";
import { signup } from "../actions/auth";
import PropTypes from "prop-types";

const SignUp = ({ showAlert, signup, isAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) showAlert("Passwords do not match", "error");
    else signup({ name, email, password, password2 });
  };

  if (isAuthenticated) return navigate("/");

  return (
    <div className="auth">
      <Helmet>
        <title>Arte - Sign Up</title>
        <meta name="description" content="sign up page" />
      </Helmet>
      <h1 className="auth__title1">Sign Up</h1>
      <p className="auth__title2">Create your Account</p>
      <form className="auth__form" onSubmit={(e) => onSubmit(e)}>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <button className="auth__form__button">Sign Up</button>
      </form>
      <p className="auth__text">
        Already have an account?{" "}
        <Link className="auth__text__link" to="/login">
          Sign In
        </Link>
      </p>
    </div>
  );
};

SignUp.propTypes = {
  showAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { showAlert, signup })(SignUp);
