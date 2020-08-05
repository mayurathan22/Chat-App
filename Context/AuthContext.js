import createDataContext from "./CreateDataContext";
import * as firebase from "firebase";
//import { createContext } from "react";

const authreducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return {
        ...state,
        userId :action.payload.Id,
        userName:action.payload.userName,
        token:action.payload.token,
      };

    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async (email, username, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const token = await firebase.auth().currentUser.getIdToken()
      dispatch({type:'signup',payload:{Id:firebase.auth().currentUser.uid},userName,token});
    } catch (e) {
      console.log(e.code);
      if (e.code === "auth/email-already-in-use")
        throw new Error("the email address is used by another account ");
    }
  };
};

export const { Context, Provider } = createDataContext(
  authreducer,
  {token:null,userId: null,userName:'',email:''},
  { signup }
);

