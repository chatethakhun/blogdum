import { FETCH_USER_AUTH_SUCCCESS,  
         FETCH_USER_AUTH_FAILED,
         REGISTER_FAILED,
         REGISTER_SUCCESS,
         SET_INITTAIL,
         REQUEST_FETCH_SERVER } from '../constant/redux/constant'
const initialState = {
    isAuth: false,
    errorMessage: null,
    isLoading: false
}

export const login = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_FETCH_SERVER: 
        return {
          ...state,
          isLoading: true
        }
      case SET_INITTAIL: 
        return {
          ...state,
          errorMessage: null
        }
      case FETCH_USER_AUTH_SUCCCESS:
        return {
            isAuth: true,
            errorMessage: null,
            isLoading: false
        }
      case FETCH_USER_AUTH_FAILED: 
        return {
          isAuth: false,
          errorMessage:action.errorMessage,
          isLoading: false
        }
      case REGISTER_SUCCESS: 
        return {
          ...state,
          isLoading: false
        }
      case REGISTER_FAILED: 
        return {
          ...state,
          errorMessage: action.errorMessage,
          isLoading: false
        }
      default:
        return state
    }
  }

