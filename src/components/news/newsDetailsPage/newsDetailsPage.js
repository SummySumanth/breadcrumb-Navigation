import React,{ Component } from 'react';

import '../../../styles/landingPage/landingPage.scss';
import { action, documentary, drama, fiction, horror, mystery, romantic, thriller} from '../../../assets/images/movieGenres/'
class LandingPage extends Component{

  render(){
    return(
      <div className={'BCN-container'}>
        <div  className={'BCN-container-header'}>NEWS !</div>
        <div  className={'BCN-cards-container'}>



        </div>
      </div>
    );
  }
}

export default LandingPage;
