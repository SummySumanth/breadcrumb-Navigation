// import SignupPageActionTypes from "../../actions/signupPage/signupPageActionTypes";

const intialState = {
  username : '',
  password : ''
}

const landingPageReducer = (state = intialState, action) => {
  switch(action.type){
    // case SignupPageActionTypes.USERNAME_INPUT: return { ...state, username: action.payload}
    // case SignupPageActionTypes.PASSWORD_INPUT: return {...state, password: action.payload}
    default: return state;
  };
}

export default landingPageReducer;