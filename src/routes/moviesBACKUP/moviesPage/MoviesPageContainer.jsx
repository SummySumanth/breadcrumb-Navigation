import React,{ Component } from 'react';
import { connect } from 'react-redux';
import breadCrumbActions from '../../../actions/breadCrumb/breadCrumbActions'

import MoviesPage from '../../../components/movies/moviesPage/moviesPage';

// import '../../styles/landingPage/landingPage.scss';

class MoviesPageContainer extends Component{

  componentDidMount(){
    console.log('component did mount moviespagecontainer');
    const navParts = window.location.pathname.split("/");
    navParts.shift();
    this.props.updateBreadCrumb(navParts);
  }

  navigationHandler = (genre) =>{
    console.log('navigation genre received', genre);
    // this.props.history.push(`${this.props.location.pathname}/database/?genre=${genre}`);
  };

  render(){
    console.log('renderingnnnngasdasd MPcontainer');
    return(
      <div className={'BCN-landingPage'}>
        <MoviesPage />
      </div>
    );
  }
}


const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch => ({
  updateBreadCrumb : payload => dispatch(breadCrumbActions.update(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPageContainer);
