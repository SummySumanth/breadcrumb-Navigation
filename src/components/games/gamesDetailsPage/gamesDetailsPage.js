import React,{ Component } from 'react';

import '../../../styles/landingPage/landingPage.scss';
import { action, documentary, drama, fiction, horror, mystery, romantic, thriller} from '../../../assets/images/movieGenres/'
class gamesDetailsPage extends Component{

  movieGenres = () =>([
    {
      name : 'Politics',
      image : politcs,
      id: 1,
    },
    {
      name : 'Bollywood',
      image : bollywood,
      id: 2,
    },
    {
      name : 'Sports',
      image : sports,
      id: 3,
    },
    {
      name : 'Medical',
      image : medical,
      id: 4,
    },
    {
      name : 'Tech',
      image : tech,
      id: 5,
    },
    {
      name : 'Music',
      image : music,
      id: 6,
    },
    {
      name : 'Local',
      image : local,
      id: 7,
    },
  ]);

  render(){
    return(
      <div className={'BCN-container'}>
        <div  className={'BCN-container-header'}>LET THE GAMING BEGIN !</div>
        <div  className={'BCN-cards-container'}>

          <div
            className={'BCN-container-innerPage-cards'}
            // style={{ backgroundImage: `url('/${item.image}')`}}
            // onClick={()=> this.onClickHandler('movies')}
          >
            {/*<div className={'BCN-container-innerPage-card-text'}>{item.name}</div>*/}
          </div>

        </div>
      </div>
    );
  }
}

export default gamesDetailsPage;
