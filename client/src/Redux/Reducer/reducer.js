const {
  LOGIN_SUCCES,
  SIGN_UP_SUCCES,
  SIGN_UP_ERROR,
  LOGOUT,
  SIGN_UP,
  FORGOT_PASSWORD,
  GET_USER_DETAIL,
  FILTER_CONCEPT,
  FILTER_TIPE,
  FILTER_BEDROOM,
  FILTER_BATHROOM,
  FILTER_PRICE,
  RESET_FILTER,
  SEARCH,
  ADD_FAVORITES

} = require("../Constants/constants");

const initialState = {
  userToken: "",
  error: false,
  isLoading: false,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
  isAuth: false,
  msg_password: {},
  concept:null,
  tipe:null,
  bedroom:null,
  bathroom:null,
  price:[null,null],
  search:null,
  favorites:[]
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCES: {
      return {
        ...state,
        userToken: action.payload.token,
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
        ...state,
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
    case GET_USER_DETAIL: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    //-----------------Filters---------------------
    case FILTER_CONCEPT: {
      return {
        ...state,
        concept: action.payload,
      };
    }
    case FILTER_TIPE: {
      return {
        ...state,
        tipe: action.payload,
      };
    }
    case FILTER_BEDROOM: {
      return {
        ...state,
        bedroom: action.payload,
      };
    }
    case FILTER_BATHROOM: {
      return {
        ...state,
        bathroom: action.payload,
      };
    }
    case FILTER_PRICE: {
      return {
        ...state,
        price: action.payload,
      };
    }
    case SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case RESET_FILTER: {
      return {
        ...state,
        concept: null,
        tipe: null,
        bedroom: null,
        bathroom: null,
        price: [null, null],
        search: null,
      };
    }

    //-----------------Favorites---------------------
    case ADD_FAVORITES: {

      return {
        ...state,
        favorites: action.payload
      }
    }

    default:
      return state;
  }
}
