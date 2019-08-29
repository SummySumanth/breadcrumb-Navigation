import React,{ Component } from 'react';

import { connect } from 'react-redux';

import breadCrumbActions from '../../../actions/breadCrumb/breadCrumbActions'

import { action, documentary, drama, fiction, horror, mystery, romantic, thriller} from '../../../assets/images/movieGenres';

import MoviesDetailsPage from '../../../components/movies/moviesDetailsPage/moviesDetailsPage';

// import '../../styles/landingPage/landingPage.scss';

class MoviesPageContainer extends Component{

  componentDidMount(){
    const navParts = window.location.pathname.split("/");
    navParts.shift();
    this.props.updateBreadCrumb(navParts);
  }

  geners = () =>([
    {
      name : 'Romantic',
      image : romantic,
      id: 10749,
    },
    {
      name : 'Action',
      image : action,
      id: 28
    },
    {
      name : 'Horror',
      image : horror,
      id : 27,
    },
    {
      name : 'Fiction',
      image : fiction,
      id : 878,
    },
    {
      name : 'Thriller',
      image : thriller,
      id : 53,
    },
    {
      name : 'Drama',
      image : drama,
      id : 18,
    },
    {
      name : 'Mystery',
      image : mystery,
      id : 9648
    }
  ]);

  getGenerName(id){
    const geners = this.geners()
    const generName = geners[geners.findIndex(item => (item.id === id))].name;
    return generName;
  };

  render(){
    const Gener = this.getGenerName(this.props.movies.SelectedGener);
    return(
      <div className={'BCN-landingPage'}>
        <MoviesDetailsPage generName={Gener} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
   movies : state.movies,
});

const mapDispatchToProps = dispatch => ({
  updateBreadCrumb : payload => dispatch(breadCrumbActions.update(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPageContainer);

