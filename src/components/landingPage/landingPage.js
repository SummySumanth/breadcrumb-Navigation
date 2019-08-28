import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { games, music, movies, news} from '../../assets/images/landingPage/'
import '../../styles/landingPage/landingPage.scss';

class LandingPage extends Component{


  static propTypes = {
    onNavChange: PropTypes.func.isRequired,
  }

  onClickHandler (direction) {
    this.props.onNavChange(direction);
  }

  render(){
    return(
      <div className={'BCN-container'}>
        <div  className={'BCN-container-header'}>CHOOSE YOUR WAY !</div>
        <div  className={'BCN-cards-container'}>
            <div
              className={'BCN-container-cards'}
              style={{ backgroundImage: `url(${movies})`}}
              onClick={()=> this.onClickHandler('movies')}
            >
              <div className={'BCN-container-card-text'}>Movies</div>
            </div>


            <div
              className={'BCN-container-cards'}
              style={{ backgroundImage: `url(${music})`}}
              onClick={()=> this.onClickHandler('music')}
            >
              <div className={'BCN-container-card-text'}>Music</div>
            </div>


            <div
              className={'BCN-container-cards'}
              style={{ backgroundImage: `url(${games})`}}
              onClick={()=> this.onClickHandler('games')}
            >
              <div className={'BCN-container-card-text'}>Games</div>
            </div>

            <div
              className={'BCN-container-cards'}
              style={{ backgroundImage: `url(${news})`}}
              onClick={()=> this.onClickHandler('news')}
            >
              <div className={'BCN-container-card-text'}>News</div>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage);
