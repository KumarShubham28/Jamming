import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.component {
  render () {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResult} onAdd={this.props.onAdd} />
      </div>
    );
  }
}

export default SearchResults;
