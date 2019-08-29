import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { rightArrow } from '../assets/images/common/'
import '../styles/breadcrumbNav/breadCrumbNav.scss'

class Breadcrumbnav extends Component{

  constructNavigationPath = (location, navs) =>{
    const indexOfLocation = navs.indexOf(location);
    if(indexOfLocation === navs.length -1 ){
      return navs.join('/');
    }
    navs.splice(indexOfLocation)
    return navs.join('/');
  };

  onNavigateClick = (location, navs) =>{
    const naviagtionPath = this.constructNavigationPath(location, navs);
    this.props.history.push(`/${naviagtionPath}`);
  };

  getLinks = navs => {
    return navs.map((item, index, arr) => {
      return (
        <div className={'BCN-navbar-item'} onClick={() => this.onNavigateClick(item, arr)} key={item}>
          {item}
          <img className={'BCN-navbar-img'} src={rightArrow}/>
        </div>
      )
    });
  };


  render(){
    const { navs } = this.props.breadCrumbNav;
    return(
      <div className={'BCN-navbar-container'}>
        <div className={'BCN-navbar-wrapper'}>
          {this.getLinks(navs)}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state =>({
      breadCrumbNav : state.breadcrumbNav,
});

const mapDispatchToProps = dispatch => ({
  // updateBreadCrumb : past => dispatch(breadCrumbActions.update),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Breadcrumbnav));

