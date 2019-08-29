import React,{ Component } from 'react';

import '../../../styles/landingPage/landingPage.scss';
import { bollywood, local, medical, music, politcs, sports, tech } from '../../../assets/images/newsPage/'
class LandingPage extends Component{

  newsTopics = () =>([
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

  getNewsTopicsComponents = (geners) =>{
    return geners.map(item =>(
      <div key={item.id}
        className={'BCN-container-innerPage-cards'}
        style={{ backgroundImage: `url('/${item.image}')`}}
        onClick={()=> this.props.onClickHandler(item.name)}
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

          {this.getNewsTopicsComponents(this.newsTopics())}

        </div>
      </div>
    );
  }
}

export default LandingPage;
