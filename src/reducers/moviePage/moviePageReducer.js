import moviePageActionTypes from '../../actions/moviePage/movieActionTypes';

const intialState = {
  SelectedGener : 10749,
}

const moviePageReducer = (state = intialState, action) => {
  switch(action.type){
    case moviePageActionTypes.SELECT_GENERE: return { ...state, SelectedGener: action.payload}
    default: return state;
  };
}

export default moviePageReducer;