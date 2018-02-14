import axios from "axios";
import { PRODUCT_ENDPOINT, LOCAL_ENDPOINT } from "../constant/apollo/constant";
import {
  FETCH_USER_AUTH_SUCCCESS,
  FETCH_USER_AUTH_FAILED,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from "../constant/redux/constant";
import { push } from 'react-router-redux'

async function fetchAsync({ email, password }) {
  let response = await axios.post(PRODUCT_ENDPOINT + "v1/auth", {
    email: email,
    password: password
  });
  return response.data;
}

const asyncAuth = ({ type, errorMessage }) => {
  return {
    type: type,
    errorMessage: errorMessage ? errorMessage: ''
  };
};

export const auth = ({ email, password }) => {
  return async dispatch => {
    try {
      const data = await fetchAsync({ email, password })
      dispatch(
        asyncAuth({
          type: FETCH_USER_AUTH_SUCCCESS
        })
      )


      await localStorage.setItem('token', data.token)
      dispatch(push('/profile'))
      
    } catch (e) {
      dispatch(
        asyncAuth({
          type: FETCH_USER_AUTH_FAILED,
          errorMessage: e.response.data.status
        })
      );
    }
  };
};

async function registerAsync({ email, password , fname, lname}) {
  let response = await axios.post(PRODUCT_ENDPOINT + "v1/register", {
    email,
    password,
    fname,
    lname
  });
  return response.data;
}

export const register = ({email, password, fname, lname}) => {
  return async dispatch => {
    try {
      await registerAsync({ email, password , fname, lname })
      dispatch(
        asyncAuth({
          type: REGISTER_SUCCESS
        })
      )
      dispatch(push('/'))
    } catch (e) {

      dispatch(
        asyncAuth({
          type: REGISTER_FAILED,
          errorMessage: e.response.data.message
        })
      )
    }
  }
}
