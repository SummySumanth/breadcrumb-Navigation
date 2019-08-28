import breadCrumbActionTypes from './breadCrumbActionTypes';

const breadCrumbActions = {
  update : payload =>({type: breadCrumbActionTypes.UPDATE_BREADCRUMB, payload}),
}

export default breadCrumbActions;