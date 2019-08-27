import React,{ Component } from 'react';

// import '../../styles/landingPage/landingPage.scss';

class LandingPage extends Component{
  render(){
    return(
      <div className={'BCN-container'}>
        <div className={'BCN-container-cards'}>Action</div>
        <div className={'BCN-container-cards'}>Romantic</div>
        <div className={'BCN-container-cards'}>Comedy</div>
        <div className={'BCN-container-cards'}>Scifi</div>
      </div>
    );
  }
}

export default LandingPage;
