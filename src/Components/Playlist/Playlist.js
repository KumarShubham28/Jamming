import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this._bind('handleNameChange')
  }
  render () {
    return (
        <div className="Playlist">
          <input defaultValue={'New Playlist'}/>
          <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          onChange={this.handleNameChange} // Why isn't this a prop if I'm passing it?
           />
          <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
        </div>
      );
    }
    handleNameChange(event) {
      this.props.onNameChange(event.target.value);
    }
  } // How and what does (event.target.value) do in this context?

export default Playlist;
