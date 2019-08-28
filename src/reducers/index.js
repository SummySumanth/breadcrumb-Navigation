import { combineReducers } from 'redux';

import landingPageReducer from './landingPage/landingPageReducer';
import breadcrumbNavReducer from './breadcrumbsNav/breadcrumbsNavReducer';

const allReducers = combineReducers({
  landingPage : landingPageReducer,
  breadcrumbNav : breadcrumbNavReducer,
});

export default allReducers;