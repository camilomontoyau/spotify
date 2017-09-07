import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LoginMain from './components/login/LoginMain';
import SearchMain from './components/search/SearchMain';

class App extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginMain}/>
          <Route path="/search" component={SearchMain}/>
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

