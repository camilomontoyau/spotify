import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../../actions/searchActions';
import querystring from 'querystring';
import SearchForm from './SearchForm';

export class SearchMain extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      searchText: '',
      results: [],
      token: `Bearer ${querystring.parse(this.props.location.search)['?access_token']}`
    };
    this._handleSearchTextState = this._handleSearchTextState.bind(this);
    this._getSearchResults = this._getSearchResults.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    if(typeof nextProps.results !== 'undefined' &&
      nextProps.results !== this.state.results
    ) {
      this.setState({
        results: nextProps.results
      });
    }
  }
  
  _handleSearchTextState(event) {
    this.setState({
      searchText: event.target.value
    });
  }
  
  _getSearchResults(event) {
    event.preventDefault();
    if(this.state.token && this.state.searchText.length) {
      this.props.actions.getSearchResultsAction(
        this.state.searchText,
        this.state.token
      );
    }
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Spotify Search</h1>
          <SearchForm
            onChange={this._handleSearchTextState}
            onSearch={this._getSearchResults}
          />
        </div>
      </div>
    );
  }
}

SearchMain.propTypes = {
  actions: PropTypes.object,
  results: PropTypes.array
};

SearchMain.defaultProps = {
  actions: {},
  results: []
};

const mapStateToProps = (state, ownProps) => {
  return {
    results: state.search.results
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchMain);

