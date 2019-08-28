import breadCrumbActionTypes from '../../actions/breadCrumb/breadCrumbActionTypes';

const intialState = {
  navs : [],
}

const breadcrumbNavReducer = (state = intialState, action) => {
  switch(action.type){
    case breadCrumbActionTypes.UPDATE_BREADCRUMB:
      console.log('👾👾👾state & action at breadcrumb reducer',state, action);
      // return { ...state, navs : action.payload};
    default: return state;
  };
}

export default breadcrumbNavReducer;