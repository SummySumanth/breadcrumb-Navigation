import breadCrumbActionTypes from '../../actions/breadCrumb/breadCrumbActionTypes';

const intialState = {
  navs : [],
}

const breadcrumbNavReducer = (state = intialState, action) => {
  switch(action.type){
    case breadCrumbActionTypes.UPDATE_BREADCRUMB: return { ...state, navs : action.payload};
    default: return state;
  };
}

export default breadcrumbNavReducer;