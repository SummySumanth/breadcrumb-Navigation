// import React,{ Component } from 'react';
// import { connect } from 'react-redux';
// import breadCrumbActions from '../../../actions/breadCrumb/breadCrumbActions'
//
// import MoviesPage from '../../../components/movies/moviesPage/moviesPage';
//
// // import '../../styles/landingPage/landingPage.scss';
//
// class MoviesPageContainer extends Component{
//
//   componentDidMount(){
//     const navParts = window.location.pathname.split("/");
//     navParts.shift();
//     this.props.updateBreadCrumb(navParts);
//   }
//
//   render(){
//     return(
//       <div className={'BCN-landingPage'}>
//         <MoviesPage />
//       </div>
//     );
//   }
// }
//
//
// const mapStateToProps = state =>({
//
// });
//
// const mapDispatchToProps = dispatch => ({
//   updateBreadCrumb : payload => dispatch(breadCrumbActions.update(payload)),
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(MoviesPageContainer);


import React,{ Component } from 'react';
import { connect } from 'react-redux';
import breadCrumbActions from '../../../actions/breadCrumb/breadCrumbActions'

import MoviesPage from '../../../components/movies/moviesPage/moviesPage';

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
        asdfasdlfjnadskvnadk;cansdckamdskcm
        <MoviesPage/>
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
