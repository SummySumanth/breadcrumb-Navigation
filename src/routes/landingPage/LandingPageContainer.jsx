import React,{ Component } from 'react';

import LandingPage from '../../components/landingPage/landingPage';

import '../../styles/landingPage/landingPage.scss';

class LandingPageContainer extends Component{


  render(){
    return(
      <div className={'BCN-landingPage'}>
        <LandingPage/>
      </div>
    );
  }
}

export default LandingPageContainer;
