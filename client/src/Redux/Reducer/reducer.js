const { LOGIN_SUCCES, SIGN_UP_SUCCES, SIGN_UP_ERROR, LOGOUT, SIGN_UP } = require("../Constants/constants");

const initialState = {
    user: {},
    error: false,
    isLoading: false,
    userInfo: {},
    isAuth: false,
  };

  export default function userReducer(state= initialState, action){
      switch(action.type){

          case LOGIN_SUCCES:{
              return{
                  ...state,
                  user:{},
                  userInfo: action.payload,
                  isLoading: false,
                  error: false,
                  isAuth:true,
              }
          }

          case SIGN_UP:{
            return{
                ...state,
                user:{},
                userInfo: {},
                error: false,
                isLoading: true,

            }
          };

          case SIGN_UP_SUCCES:{
            return {
                ...state,
                user: action.payload, // no es un objeto?
                userInfo: action.payload, //no es un objeto?
                isLoading: false,
                error: false,
              };
          }

          case SIGN_UP_ERROR:{
            return {
                ...state,
                user: {},
                isLoading: false,
                error: true,
              };
          }

          case LOGOUT:{
              return{
                isAuth: false,
                userInfo:{},
                user:{}
              }
          }
          default: return state;
      }
  }

