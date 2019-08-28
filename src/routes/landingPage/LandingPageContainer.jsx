import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import LandingPage from '../../components/landingPage/landingPage';

import '../../styles/landingPage/landingPage.scss';

class LandingPageContainer extends Component{

  navigationHandler = (direction) =>{
    console.log('this.props.location.pathname + ', `${this.props.location.pathname}/${direction}` )
    this.props.history.push(`${this.props.location.pathname}/${direction}`);
  };

  render(){
    console.log('props at landingpage container', this.props);
    return(
      <div className={'BCN-landingPage'}>
        <LandingPage
          onNavChange={this.navigationHandler}
        />
      </div>
    );
  }
}

export default LandingPageContainer;
