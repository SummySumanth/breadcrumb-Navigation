import React,{ Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './routes/history';
import BreadCrumbNav from './routes/BreadCrumbNav'
import WelcomeScreen from './routes/WelcomeScreen';
import Loadable from 'react-loadable';

// import LandingPage from './routes/landingPage/LandingPage';
 import './styles/index.scss';

function MyLoadingComponent() {
  return <div>Loading...</div>;
}

const LandingPage = Loadable({
  loader: () => import('./routes/landingPage/LandingPageContainer.jsx'),
  loading: MyLoadingComponent,
});

const MoviesPage = Loadable({
  loader: () => import('./routes/movies/moviesPage/MoviesPageContainer.jsx'),
  loading: MyLoadingComponent,
});

const MoviesDetailsPage = Loadable({
  loader: () => import('./routes/movies/moviesDatabasePage/MoviesDatabasePageContainer.jsx'),
  loading: MyLoadingComponent,
});

const MusicPage = Loadable({
  loader: () => import('./routes/music/musicPage/MusicPageContainer.jsx'),
  loading: MyLoadingComponent,
});
const MusicDetailsPage = Loadable({
  loader: () => import('./routes/music/musicDatabasePage/MusicDatabasePageContainer.jsx'),
  loading: MyLoadingComponent,
});

const GamesPage = Loadable({
  loader: () => import('./routes/games/gamesPage/GamesPageContainer.jsx'),
  loading: MyLoadingComponent,
});
const GamesDetailsPage = Loadable({
  loader: () => import('./routes/games/gamesDatabasePage/GamesDatabasePageContainer.jsx'),
  loading: MyLoadingComponent,
});

const NewsPage = Loadable({
  loader: () => import('./routes/news/newsPage/NewsPageContainer.jsx'),
  loading: MyLoadingComponent,
});

const NewsDetailsPage = Loadable({
  loader: () => import('./routes/news/newsDatabasePage/NewsDatabasePageContainer.jsx'),
  loading: MyLoadingComponent,
});

class Routes extends Component{

  constructor(props){
    super(props);
    this.state = {
      showModal : true
    };
  }

  onModalClose = () =>{
    this.setState({
      showModal : false
    })
  };

  render(){
    return(
      <Router history={history}>
        { this.state.showModal ? <WelcomeScreen onModalClose={this.onModalClose} /> : <div></div> }
        <BreadCrumbNav/>
        <Switch>
          <Route exact path='/' render={() => (    <Redirect to="/home" />      )}/>
          <Route exact path='/home' component={LandingPage}/>

          <Route exact path='/home/movies' component={MoviesPage}/>
          <Route exact path='/home/movies/database' component={MoviesDetailsPage}/>

          <Route exact path='/home/music' component={MusicPage}/>
          <Route exact path='/home/music/database' component={MusicDetailsPage}/>

          <Route exact path='/home/games' component={GamesPage}/>
          <Route exact path='/home/games/database' component={GamesDetailsPage}/>

          <Route exact path='/home/news' component={NewsPage}/>
          <Route exact path='/home/news/database' component={NewsDetailsPage}/>
        </Switch>
      </Router>
    )
  }
}

export default Routes;