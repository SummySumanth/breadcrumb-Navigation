import React,{ Component } from 'react';

import '../../../styles/landingPage/landingPage.scss';
import { action, documentary, drama, fiction, horror, mystery, romantic, thriller} from '../../../assets/images/movieGenres/'
class LandingPage extends Component{

  movieGenres = () =>([
    {
      name : 'Romantic',
      image : romantic,
      id: 10749,
    },
    {
      name : 'Action',
      image : action,
      id: 28
    },
    {
      name : 'Horror',
      image : horror,
      id : 27,
    },
    {
      name : 'Fiction',
      image : fiction,
      id : 878,
    },
    {
      name : 'Thriller',
      image : thriller,
      id : 53,
    },
    {
      name : 'Drama',
      image : drama,
      id : 18,
    },
    {
      name : 'Mystery',
      image : mystery,
      id : 9648
    }
  ]);

  getMovieGenresComponents = (geners) =>{
    return geners.map(item =>(
      <div key={item.id}
        className={'BCN-container-innerPage-cards'}
        style={{ backgroundImage: `url('/${item.image}')`}}
        // onClick={()=> this.onClickHandler('movies')}
      >
        <div className={'BCN-container-innerPage-card-text'}>{item.name}</div>
      </div>
    ))
  };

  render(){
    return(
      <div className={'BCN-container'}>
        <div  className={'BCN-container-header'}>WHAT ? WHERE ? WHEN ?</div>
        <div  className={'BCN-cards-container'}>

          {this.getMovieGenresComponents(this.movieGenres())}

        </div>
      </div>
    );
  }
}

export default LandingPage;
