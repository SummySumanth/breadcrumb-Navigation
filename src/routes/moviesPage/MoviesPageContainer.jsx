import React,{ Component } from 'react';
import { connect } from 'react-redux';
import breadCrumbActions from '../../actions/breadCrumb/breadCrumbActions'

import MoviesPage from '../../components/moviesPage/moviesPage';

// import '../../styles/landingPage/landingPage.scss';

class MoviesPageContainer extends Component{

  componentDidMount(){
    const navParts = window.location.pathname.split("/");
    navParts.shift();
    this.props.updateBreadCrumb(navParts);
  }

  render(){
    return(
      <div className={'BCN-landingPage'}>
        <MoviesPage/>
      </div>
    );
  }
}


const mapStateToProps = state => () =>{
  console.log('state at MOVIEPAGECONTAINER map state to props', state);
  return {
    breadCrumbNav : state.breadcrumbNav,
  }
};
const mapDispatchToProps = dispatch => ({
  updateBreadCrumb : payload => dispatch(breadCrumbActions.update(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPageContainer);
