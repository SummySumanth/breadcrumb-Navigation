import React,{ Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './routes/history';
import BreadCrumbNav from './routes/BreadCrumbNav'
import Loadable from 'react-loadable';

// import LandingPage from './routes/landingPage/LandingPage';


function MyLoadingComponent() {
  return <div>Loading...</div>;
}

const LandingPage = Loadable({
  loader: () => import('./routes/landingPage/LandingPageContainer.jsx'),
  loading: MyLoadingComponent,
});

const MoviesPage = Loadable({
  loader: () => import('./routes/moviesPage/MoviesPageContainer.jsx'),
  loading: MyLoadingComponent,
});

const MusicPage = Loadable({
  loader: () => import('./routes/musicPage/MusicPageContainer.jsx'),
  loading: MyLoadingComponent,
});

const GamesPage = Loadable({
  loader: () => import('./routes/gamesPage/GamesPageContainer.jsx'),
  loading: MyLoadingComponent,
});

const NewsPage = Loadable({
  loader: () => import('./routes/newsPage/NewsPageContainer.jsx'),
  loading: MyLoadingComponent,
});

class Routes extends Component{
  render(){
    return(
      <Router history={history}>
        <BreadCrumbNav/>
        <Switch>
          <Route exact path='/' render={() => (    <Redirect to="/home" />      )}/>
          <Route exact path='/home' component={LandingPage}/>

          <Route path='/home/movies' component={MoviesPage}/>
          <Route path='/home/movies/database' component={MoviesPage}/>

          <Route path='/home/music' component={MusicPage}/>
          <Route path='/home/music/database' component={MusicPage}/>

          <Route path='/home/games' component={GamesPage}/>
          <Route path='/home/games/database' component={GamesPage}/>

          <Route path='/home/news' component={NewsPage}/>
          <Route path='/home/news/database' component={NewsPage}/>
        </Switch>
      </Router>
    )
  }
}

export default Routes;