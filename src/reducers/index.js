import { combineReducers } from 'redux';

import landingPageReducer from './landingPage/landingPageReducer';
import breadcrumbNavReducer from './breadcrumbsNav/breadcrumbsNavReducer';
import moviePageReducer from './moviePage/moviePageReducer';

const allReducers = combineReducers({
  landingPage : landingPageReducer,
  breadcrumbNav : breadcrumbNavReducer,
  movies : moviePageReducer,
});

export default allReducers;