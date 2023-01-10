import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import Alert from "./Alert";
import PropTypes from "prop-types";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <a className="navbar__first__auth__link" onClick={logout} href="#!">
      Logout
    </a>
  );

  const guestLinks = (
    <Fragment>
      <Link className="navbar__first__auth__link" to="/login">
        Login
      </Link>
      <Link className="navbar__first__auth__link" to="/signup">
        Sign Up
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar__first">
          <div className="navbar__first__logo">
            <Link className="navbar__first__logo__link" to="/">
              ARTE
            </Link>
          </div>
          <div className="navbar__first__auth">
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </div>
        </div>
        <div className="navbar__second">
          <li className="navbar__second__item">
            <NavLink className="navbar__second__item__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar__second__item">
            <NavLink className="navbar__second__item__link" to="/about">
              About
            </NavLink>
          </li>
          <li className="navbar__second__item">
            <NavLink className="navbar__second__item__link" to="/contact">
              Contact
            </NavLink>
          </li>
        </div>
      </nav>
      <Alert />
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
