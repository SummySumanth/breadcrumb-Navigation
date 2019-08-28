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

class Routes extends Component{
  render(){
    return(
      <Router history={history}>
        <BreadCrumbNav />
        <Switch>
          <Route exact path='/' render={() => (    <Redirect to="/landing" />      )}/>
          <Route exact path='/landing' component={LandingPage}/>

          <Route path='/landing/movies' component={MoviesPage}/>
        </Switch>
      </Router>
    )
  }
}

export default Routes;