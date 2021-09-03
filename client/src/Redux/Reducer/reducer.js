const {
  LOGIN_SUCCES,
  SIGN_UP_SUCCES,
  SIGN_UP_ERROR,
  LOGOUT,
  SIGN_UP,
  FORGOT_PASSWORD,
  GET_USER_DETAIL,
} = require("../Constants/constants");

const initialState = {
  user: {},
  error: false,
  isLoading: false,
  userInfo: {},
  isAuth: false,
  msg_password: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCES: {
      return {
        ...state,
        user: {},
        userInfo: action.payload,
        isLoading: false,
        error: false,
        isAuth: true,
      };
    }

    case SIGN_UP: {
      return {
        ...state,
        user: {},
        userInfo: {},
        error: false,
        isLoading: true,
      };
    }

    case SIGN_UP_SUCCES: {
      return {
        ...state,
        user: action.payload, // no es un objeto?
        userInfo: action.payload, //no es un objeto?
        isLoading: false,
        error: false,
      };
    }

    case SIGN_UP_ERROR: {
      return {
        ...state,
        user: {},
        isLoading: false,
        error: true,
      };
    }

    case LOGOUT: {
      return {
        isAuth: false,
        userInfo: {},
        user: {},
      };
    }

    case FORGOT_PASSWORD: {
      return {
        ...state,
        msg_password: action.payload,
      };
    }
    case GET_USER_DETAIL:{
      return{
        ...state,
        userInfo: action.payload
      }
    }
    default:
      return state;
  }
}
