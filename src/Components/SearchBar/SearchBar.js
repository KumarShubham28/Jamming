import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this._bind('search', 'handleTermChange')
  }
// Passes state of term to this.props.onSearch
  search(term) {
    this.props.onSearch(term);
  }
// Sets the state of the search bar's term to the event target's value
  handleTermChange(event) {
    this.search(event.target.value)
  }

  render () {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
