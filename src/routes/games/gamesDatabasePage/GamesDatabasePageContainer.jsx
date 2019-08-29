import React,{ Component } from 'react';

import { connect } from 'react-redux';

import breadCrumbActions from '../../../actions/breadCrumb/breadCrumbActions'


import GamesPage from '../../../components/games/gamesDetailsPage/gamesDetailsPage';


class MoviesPageContainer extends Component{

  componentDidMount(){
    const navParts = window.location.pathname.split("/");
    navParts.shift();
    this.props.updateBreadCrumb(navParts);
  }


  render(){
    return(
      <div className={'BCN-landingPage'}>
        <GamesPage/>
      </div>
    );
  }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateBreadCrumb : payload => dispatch(breadCrumbActions.update(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPageContainer);

