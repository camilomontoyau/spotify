import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as followingActions from '../../actions/followingActions';
import querystring from 'querystring';
import ResultsTable from './ResultsTable';
import Nav from '../common/Nav';

export class FollowingMain extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      followingArtists: [],
      token: `Bearer ${querystring.parse(this.props.location.search)['?access_token']}`
    };
    this._getFollowingArtists = this._getFollowingArtists.bind(this);
  }
  
  componentDidMount() {
    this._getFollowingArtists();
  }

  componentWillReceiveProps(nextProps) {
    if(typeof nextProps.followingArtists !== 'undefined' &&
      nextProps.followingArtists !== this.state.followingArtists
    ) {
      this.setState({
        followingArtists: nextProps.followingArtists
      });
    }
  }
  
  _getFollowingArtists(event) {
    if(this.state.token) {
      this.props.actions.getFollowingArtistsAction(this.state.token);
    }
  }

  render() {
    let {followingArtists} = this.state;
    let {me} = this.props;
    return (
      <div className="search">
        <Nav
          active="following"
          token={querystring.parse(this.props.location.search)['?access_token']}
        />
        {!!(me) && <h1>User: {!!(me.id) ? me.id : ''}</h1>}
        {followingArtists.length ?
          <ResultsTable
            results={followingArtists}
          />
          :
          <h2>No results</h2>
        }
      </div>
    );
  }
}

FollowingMain.propTypes = {
  actions: PropTypes.object,
  results: PropTypes.array
};

FollowingMain.defaultProps = {
  actions: {},
  results: []
};

const mapStateToProps = (state, ownProps) => {
  return {
    followingArtists: state.following.followingArtists,
    me: state.login.me
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(followingActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowingMain);

