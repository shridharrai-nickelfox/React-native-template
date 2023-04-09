import Actions from "../Actions/AppActions";

let initialState = {
  user: {},
  authToken: null,
  isLogged: false
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        user: action.data
      };
    case Actions.LOGOUT:
      return {
        ...state,
        isLogged: false,
        authToken: null
      };
    case Actions.SET_TOKEN:
      return {
        ...state,
        authToken: action.data,
        isLogged: true
      };
    default:
      return state;
  }
};

export default AppReducer;
