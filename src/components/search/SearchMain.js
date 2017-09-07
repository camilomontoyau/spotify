import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../../actions/searchActions';



export class SearchMain extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      message: ''
    };
    this.getMessage = this.getMessage.bind(this);
  }
  
  componentWillMount() {
    this.getMessage();
  }
  
  componentWillReceiveProps(nextProps) {
    if(typeof nextProps.message !== 'undefined' &&
      nextProps.message !== this.state.message
    ) {
      this.setState({
        message: nextProps.message
      });
    }
  }
  
  getMessage() {
    this.props.actions.getMessage();
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Spotify Search</h1>
          <p>
            <a
              className="btn btn-lg btn-success"
              href="#"
              role="button"
            >
              {this.state.message}
            </a>
          </p>
        </div>
      </div>
    );
  }
}

SearchMain.propTypes = {
  actions: PropTypes.object,
  message: PropTypes.string
};

SearchMain.defaultProps = {
  actions: {},
  message: ''
};

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.search.message
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchMain);

