import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as currentActions from '../../actions/currentActions';
import querystring from 'querystring';
import TrackCard from './TrackCard';
export class CurrentMain extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      currentTrack: {},
      token: `Bearer ${querystring.parse(this.props.location.search)['?access_token']}`
    };
    this._getCurrentTrack = this._getCurrentTrack.bind(this);
  }
  
  componentWillMount() {
    this._getCurrentTrack();
  }
  
  componentWillReceiveProps(nextProps) {
    if(typeof nextProps.currentTrack !== 'undefined' &&
      nextProps.currentTrack !== this.state.currentTrack
    ) {
      this.setState({
        currentTrack: nextProps.currentTrack
      });
    }
  }
  
  _getCurrentTrack() {
    if(this.state.token) {
      this.props.actions.getCurrentTrackAction(
        this.state.token
      );
    }
  }

  render() {
    return (
      <div className="search">
        <div className="jumbotron">
          <h1>Spotify Search</h1>
        </div>
        <TrackCard
          currentTrack={this.state.currentTrack}
        />
      </div>
    );
  }
}

CurrentMain.propTypes = {
  actions: PropTypes.object,
  currentTrack: PropTypes.object
};

CurrentMain.defaultProps = {
  actions: {},
  currentTrack: {}
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentTrack: state.current.currentTrack
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(currentActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentMain);

