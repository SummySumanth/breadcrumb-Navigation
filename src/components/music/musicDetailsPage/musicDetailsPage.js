import React,{ Component } from 'react';

import '../../../styles/landingPage/landingPage.scss';
import { action, documentary, drama, fiction, horror, mystery, romantic, thriller} from '../../../assets/images/movieGenres/'
class musicDetailsPage extends Component{

  render(){
    return(
      <div className={'BCN-container'}>
        <div  className={'BCN-container-header'}>LETS BANG OUR HEAD !</div>
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

export default musicDetailsPage;
