import React,{ Component } from 'react';

import MoviesPage from '../../components/moviesPage/moviesPage';

import '../../styles/landingPage/landingPage.scss';

class MoviesPageContainer extends Component{


  render(){
    return(
      <div className={'BCN-landingPage'}>
        <MoviesPage/>
      </div>
    );
  }
}

export default MoviesPageContainer;