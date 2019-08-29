import moviePageActionTypes from './movieActionTypes';

const breadCrumbActions = {
  selectGener : payload =>({type: moviePageActionTypes.SELECT_GENERE, payload}),
}

export default breadCrumbActions;