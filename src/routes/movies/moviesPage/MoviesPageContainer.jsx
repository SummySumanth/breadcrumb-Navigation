import React,{ Component } from 'react';
import { connect } from 'react-redux';
import breadCrumbActions from '../../../actions/breadCrumb/breadCrumbActions';
import moviePageAction from '../../../actions/moviePage/moviePageActions';

import MoviesPage from '../../../components/movies/moviesPage/moviesPage';

class MoviesPageContainer extends Component{

  componentDidMount(){
    const navParts = window.location.pathname.split("/");
    navParts.shift();
    this.props.updateBreadCrumb(navParts);
  }

  navigationHandler = gener =>{
    this.props.selectGener(gener);
    this.props.history.push(`${this.props.location.pathname}/details`);
  };

  render(){
    return(
      <div className={'BCN-landingPage'}>
        <MoviesPage navigationHandler={this.navigationHandler} />
      </div>
    );
  }
}


const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch => ({
  updateBreadCrumb : payload => dispatch(breadCrumbActions.update(payload)),
  selectGener : payload => dispatch(moviePageAction.selectGener(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPageContainer);
