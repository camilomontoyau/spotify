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
import FollowingMain from './components/following/FollowingMain';
import querystring from 'querystring';

class App extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      token: querystring.parse(window.location.href.split('?')[1])['access_token'] ? `Bearer ${querystring.parse(window.location.href.split('?')[1])['access_token']}` : null
    };
  }

  componentDidMount() {
    this.props.actions.isLoggedAction(this.state.token);
    if(this.props.logged === false) {
      this.setState({token: null});
    }
  }

  componentWillReceiveProps(nextProps) {
    if(typeof nextProps.logged !== 'undefined' && nextProps.logged === false) {
      this.setState({token: null});
    }
  }
  
  render() {
    return (
      <Router>
        <div>
          {!(this.state.token) ? <Route path="/" component={LoginMain}/> :
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
              <Route
                exact
                path="/following"
                component={FollowingMain}/>
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
  console.log('state', state);
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

