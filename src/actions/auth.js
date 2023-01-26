import axios from "axios";
import { showAlert } from "./alert";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

export const signup =
  ({ name, email, password, password2 }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password, password2 });

    try {
      const res = await axios.post(
        "http://178.62.198.136/api/accounts/signup",
        body,
        config
      );

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });

      dispatch(login(email, password));
    } catch (err) {
      dispatch({
        type: SIGNUP_FAIL,
      });

      dispatch(showAlert("Error creating user account", "error"));
    }
  };

export const login = (email, password) => async (dispatch) => {
  //async because using axios to make login request
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "http://178.62.198.136/api/token/",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(showAlert("Authenticated successfully", "success"));
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch(showAlert("Error authenticating", "error"));
  }
};

export const logout = () => (dispatch) => {
  dispatch(showAlert("Logout successful.", "success"));
  dispatch({ type: LOGOUT });
};
