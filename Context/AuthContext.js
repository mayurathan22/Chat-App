import createDataContext from "./CreateDataContext";
import * as firebase from "firebase";
//import { createContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";

const authreducer = (state, action) => {
  switch (action.type) {
    case "authenticate":
      return {
        ...state,

        userId: action.payload.Id,
        userName: action.payload.username,
        token: action.payload.token,
        email: action.payload.email,
        tryAutoLogin: true,
      };
    case "tryAutoLogin":
      return {
        ...state,
        tryAutoLogin: true,
      };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async (email, username, password) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await user.user.updateProfile({ displayName: username });
      const token = await firebase.auth().currentUser.getIdToken();
      const userId = firebase.auth().currentUser.uid;
      saveDatatoStorage(userId, token, username, email);
      dispatch({
        type: "authenticate",
        payload: {
          Id: userId,
          username,
          token,
          email,
        },
      });
    } catch (e) {
      console.log(e.code);
      if (e.code === "auth/email-already-in-use")
        throw new Error("the email address is used by another account ");
    }
  };
};

const signin = (dispatch) => {
  return async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const token = await firebase.auth().currentUser.getIdToken();
      const userId = firebase.auth().currentUser.uid;
      const username = firebase.auth().currentUser.displayName;
      saveDatatoStorage(userId, token, username, email);
      dispatch({
        type: "authenticate",
        payload: {
          Id: userId,
          username: username,
          token,
          email: email,
        },
      });
    } catch (e) {
      console.log(e.code);
      if (e.code === "auth/wrong-password" || e.code === "auth/user-not-found")
        throw new Error("the email or password incorrect ");
    }
  };
};

const saveDatatoStorage = (userId, token, userName, email) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({ userId, token, userName, email })
  );
};

const autoLogin = (dispatch) => {
  return () => {
    dispatch({ type: "tryAutoLogin" });
  };
};

const authenticate = (dispatch) => {
  return async (email, userId, username, token) => {
    dispatch({
      type: "authenticate",
      payload: {
        Id: userId,
        username: username,
        token,
        email: email,
      },
    });
  };
};

export const { Context, Provider } = createDataContext(
  authreducer,
  { token: null, userId: null, userName: "", email: "", tryAutoLogin: false },
  { signup, signin, autoLogin, authenticate }
);
