import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { login } from "../actions/auth";
import PropTypes from "prop-types";

const Login = ({ login, isAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) return navigate("/");

  return (
    <div className="auth">
      <Helmet>
        <title>Arte - Login</title>
        <meta name="description" content="login page" />
      </Helmet>
      <h1 className="auth__title1">Sign In</h1>
      <p className="auth__title2">Sign into your Account</p>
      <form className="auth__form" onSubmit={(e) => onSubmit(e)}>
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
        <button className="auth__form__button">Login</button>
      </form>
      <p className="auth__text">
        Don't have an account?{" "}
        <Link className="auth__text__link" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
