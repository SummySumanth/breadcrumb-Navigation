import React,{ Component } from 'react';
import { connect } from 'react-redux';

import '../styles/breadcrumbNav/breadCrumbNav.scss'

class Breadcrumbnav extends Component{

  getLinks = () =>{
    return(
      <div>HELLLLLL</div>
    )
  };

  render(){
    console.log('PROPS AT BREAD CRUMB NAV ARE', this.props);
    return(
      <div className={'BCN-navbar-container'}>
        {this.getLinks()}
      </div>
    );
  }
}

const mapStateToProps = state => () =>{
    console.log('state at BREADCRUMB map state to props', state);
    return {
      breadCrumbNav : state.breadcrumbNav,
    }
};

const mapDispatchToProps = dispatch => ({
  // updateBreadCrumb : past => dispatch(breadCrumbActions.update),
});

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbnav);

