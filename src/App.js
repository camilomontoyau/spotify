import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from './actions/loginActions';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LoginMain from './components/login/LoginMain';
import SearchMain from './components/search/SearchMain';
import CurrentMain from './components/current/CurrentMain';
import querystring from 'querystring';

class App extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      logged: false,
      token: `Bearer ${querystring.parse(window.location.href.split('?')[1])['access_token']}`
    };
    this.isLogged = this.isLogged.bind(this);
  }
  
  componentWillMount(){
    if(!!(this.state.token)){
      this.isLogged(this.state.token);
    }
  }
  
  componentWillReceiveProps (nextProps) {
    if(typeof nextProps.logged !== 'undefined' &&
      this.state.logged !== nextProps.logged
    ) {
      this.setState({
        logged: nextProps.logged
      });
    }
  }
  
  isLogged (token='') {
    this.props.actions.isLoggedAction(token);
  }

  render() {
    return (
      <Router>
        <div>
          {!this.state.logged && <Route path="/" component={LoginMain}/>}
          {this.state.logged &&
            <div>
              <Route
                exact
                path="/search"
                component={SearchMain}
              />
              <Route
                exact
                path="/current"
                component={CurrentMain}/>
            </div>
          }
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

App.defaultProps = {
  children: {}
};

const mapStateToProps = (state, ownProps) => {
  return {
    logged: state.login.logged
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

