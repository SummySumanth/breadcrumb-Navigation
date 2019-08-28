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
  constructor(props){
    super(props);
    const navParts = window.location.pathname.split("/");
    navParts.shift();
    this.state = {
      nav : navParts,
    }
  }

  render(){
    return(
      <Router history={history}>
        <BreadCrumbNav navParts={this.state.nav}/>
        <Switch>
          <Route exact path='/' render={() => (    <Redirect to="/home" />      )}/>
          <Route exact path='/home' component={LandingPage}/>

          <Route path='/home/movies' component={MoviesPage}/>
          <Route path='/home/movies/database' component={MoviesPage}/>
        </Switch>
      </Router>
    )
  }
}

export default Routes;