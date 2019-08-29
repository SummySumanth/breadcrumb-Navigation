import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { rightArrow } from '../assets/images/common/';
import { react, redux, reduxLogger, reduxThunk, webpack, sass, github,running, man, linkedin} from '../assets/images/welcomePage/';
import '../styles/welcomeScreen/welcomeScreen.scss';

class WelcomeScreen extends Component{

  getTechsUsed = () => {
    const tech = [
      {
        name: 'React',
        image: react,
        version: 'V 16.9.0'
      },
      {
        name: 'Redux',
        image: redux,
        version: 'V 4.0.4'
      },
      {
        name: 'Redux Logger',
        image: reduxLogger,
        version: 'V 3.0.6'
      },
      {
        name: 'Redux Thunk',
        image: reduxThunk,
        version: 'V 2.3.0'
      },
      {
        name: 'Webpack',
        image: webpack,
        version: 'V 4.39.2'
      },
      {
        name: 'Sass',
        image: sass,
        version: ''
      },
    ];

    return tech.map(item =>{
      return (
        <div key={item.name} className={'TechUsedContainer'}>
          <div className={'TechUsedImage'} style={{ backgroundImage: `url('${item.image}')`}}>
          </div>
          <div className={'TechUsedTextContainer'}>
            <div className={'TechUsedText'}>{item.name}</div>
            <div className={'TechUsedTextVersion'}>{item.version}</div>
          </div>
        </div>
      )
    });
  };


  getProjectLinks = () => {
    const Links = [
      {
        name: 'View in Production',
        image: running,
        url: 'http://breadcrumb-navigation.surge.sh/'
      },
      {
        name: 'Github/BreadcrumbNavigation',
        image: github,
        url: 'https://github.com/SummySumanth/breadcrumb-Navigation'
      },
      {
        name: 'View Resume',
        image: man,
        url: 'https://doc-00-b8-docs.googleusercontent.com/docs/securesc/2cc653fd9a2316eo26qud4hlmagvvfls/v0d2acu55qfv8lvtkdbfgc72dctdhjs9/1567058400000/07228212941672975888/07228212941672975888/15NLPJRtuUdQ_I0YoKjeNBX7J0TRDMlX0?e=download&nonce=5j5qdup8qarjg&user=07228212941672975888&hash=i7e2imuoqetqoa5lv4c81gv'
      },
      {
        name: 'LinkedIn',
        image: linkedin,
        url: 'https://doc-00-b8-docs.googleusercontent.com/docs/securesc/2cc653fd9a2316eo26qud4hlmagvvfls/v0d2acu55qfv8lvtkdbfgc72dctdhjs9/1567058400000/07228212941672975888/07228212941672975888/15NLPJRtuUdQ_I0YoKjeNBX7J0TRDMlX0?e=download&nonce=5j5qdup8qarjg&user=07228212941672975888&hash=i7e2imuoqetqoa5lv4c81gv'
      },

    ];

    return Links.map(item =>{
      return (
          <div key={item.name} className={'TechUsedContainerLinks'} onClick={() => window.open(item.url, '_blank')}>
            <div className={'TechUsedImage'} style={{ backgroundImage: `url('${item.image}')`}}>
            </div>
            <div className={'TechUsedTextContainer'}>
              <div className={'TechUsedText'}>{item.name}</div>
            </div>
          </div>
      )
    });
  }

  render(){
    return(
      <div className={'WelcomeScreen'}>
        <div className={'ModalContainer'}>
            <div className={'ContentHolder'}>
                <h1 style={{marginBottom: '10px'}}>Welcome to BreadCrumb Navigation Project !</h1>
                <p className={'ModalSubHeader'}>This project is to demonstrate react navigation in breadcrumbs style with a <strong>BreadCrumb Navigation Bar !</strong></p>
                <div className={'divider'}></div>

                <div className={'ModalBody'}>

                  <p className={'ModalBody-header'}>Libraries and Buildtools used in this project :</p>
                  <div className={'TechBlock'}>
                    <div className={'TechBlock-container'}>
                      {this.getTechsUsed()}
                    </div>
                  </div>

                  <p className={'ModalBody-header'}>Project & Profile Links :</p>
                  <div className={'TechBlock'}>
                    <div className={'TechBlock-container'}>
                      {this.getProjectLinks()}
                    </div>
                  </div>

                </div>
            </div>
          <div className={'modalCloseBtn'} onClick={this.props.onModalClose}>LET'S GO !</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WelcomeScreen));

