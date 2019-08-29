import React,{ Component } from 'react';

import { connect } from 'react-redux';

import breadCrumbActions from '../../../actions/breadCrumb/breadCrumbActions'


import NewsDetailsPage from '../../../components/news/newsDetailsPage/newsDetailsPage';

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
        <NewsDetailsPage />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  // biometricResults: state.biometricResults,
});

const mapDispatchToProps = dispatch => ({
  updateBreadCrumb : payload => dispatch(breadCrumbActions.update(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPageContainer);

