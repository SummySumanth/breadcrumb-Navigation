import { combineReducers } from 'redux';

import landingPageReducer from './landingPage/landingPageReducer'

const allReducers = combineReducers({
  landingPage : landingPageReducer
});

export default allReducers;