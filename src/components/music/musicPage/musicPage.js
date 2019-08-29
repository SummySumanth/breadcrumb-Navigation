import React,{ Component } from 'react';

import '../../../styles/landingPage/landingPage.scss';
import { blues, country, folk, jazz, metal, rock} from '../../../assets/images/musicGenres/'
class musicPage extends Component{

  movieGenres = () =>([
    {
      name : 'Rock',
      image : rock,
      id: 10749,
    },
    {
      name : 'Jazz',
      image : jazz,
      id: 28
    },
    {
      name : 'Folk',
      image : folk,
      id : 27,
    },
    {
      name : 'Country',
      image : country,
      id : 878,
    },
    {
      name : 'Blues',
      image : blues,
      id : 53,
    },
    {
      name : 'Metal',
      image : metal,
      id : 18,
    },
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
        <div  className={'BCN-container-header'}>SELECT YOUR MUSIC LOVE !</div>
        <div  className={'BCN-cards-container'}>

          {this.getMovieGenresComponents(this.movieGenres())}

        </div>
      </div>
    );
  }
}

export default musicPage;
