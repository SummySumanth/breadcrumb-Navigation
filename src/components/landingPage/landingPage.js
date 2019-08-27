import React,{ Component } from 'react';

// import '../../styles/landingPage/landingPage.scss';
import { games, music, movies, news} from '../../assets/images/landingPage/'
class LandingPage extends Component{
  render(){
    return(
      <div className={'BCN-container'}>
        <div className={'BCN-container-cards'} style={{ backgroundImage: `url(${movies})`}}>
          <div className={'BCN-container-card-text'}>Movies</div>
        </div>
        <div className={'BCN-container-cards'} style={{ backgroundImage: `url(${music})`}}>
          <div className={'BCN-container-card-text'}>Music</div>
        </div>
        <div className={'BCN-container-cards'} style={{ backgroundImage: `url(${games})`}}>
          <div className={'BCN-container-card-text'}>Games</div>
        </div>
        <div className={'BCN-container-cards'} style={{ backgroundImage: `url(${news})`}}>
          <div className={'BCN-container-card-text'}>News</div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
