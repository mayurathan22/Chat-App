
import createDataContext from "./CreateDataContext";
import * as firebase from "firebase";
//import { createContext } from "react";

const authreducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async (email, username, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e.code);
      if (e.code === "auth/email-already-in-use")
        throw new Error("the email address is used by another account ");
    }
  };
};

export const { Context, Provider } = createDataContext(authreducer, {}, { signup });
