import { v4 as uuid } from "uuid";
import { SHOW_ALERT, HIDE_ALERT } from "./types";

//format provided by thunk middleware
export const showAlert =
  (
    msg,
    alertType,
    timeout = 5000 //alert present for 5 sec
  ) =>
  (dispatch) => {
    const id = uuid();
    dispatch({
      type: SHOW_ALERT,
      payload: { msg, alertType, id },
    });

    setTimeout(() => dispatch({ type: HIDE_ALERT, payload: id }), timeout);
  };
