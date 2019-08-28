import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import breadCrumbActions from '../../actions/breadCrumb/breadCrumbActions'

import LandingPage from '../../components/landingPage/landingPage';
class LandingPageContainer extends Component{

  navigationHandler = (direction) =>{
    this.props.history.push(`${this.props.location.pathname}/${direction}`);
  };

  componentDidMount(){
    const navParts = window.location.pathname.split("/");
    navParts.shift();
    console.log('DISPATCHING AT LANDING PAGE WITH NAVPARTS',navParts);
    this.props.updateBreadCrumb(navParts);
  }

  render(){
    return(
      <div className={'BCN-landingPage'}>
        <LandingPage
          onNavChange={this.navigationHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => () =>{
  console.log('state at LANDINGPAGECONTAINER map state to props', state);
  return {
    breadCrumbNav : state.breadcrumbNav,
  }
};
const mapDispatchToProps = dispatch => ({
  updateBreadCrumb : payload => dispatch(breadCrumbActions.update(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);
