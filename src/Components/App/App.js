import React from 'react';
import Spotify from '../../util/Spotify';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css'

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    searchResults: [],
    playlistName: 'New Playlist',
    playlistTracks: []
  }
  this._bind('removeTrack', 'updatePlaylistName', 'savePlaylist', 'search') // I've done my own research and still don't really understand the point of binding.
} // why bind these methods?

// tracks id property to check if the current song is in the playlistTracks state. If not, adds song
addTrack(track) {
  if (!this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
    this.setState(prevState => ({
      playlistTracks: [...prevState.playlistTracks, track]
    })); //I don't really understand thid code. Why is playlist Track repeated in playlistTrack => playlistTrack? What is prevstate and the tripple dots?
  }
}
// Filters tracks that already are on the playlist
removeTrack(track) {
  this.setState({
     playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
   }); // I don't understand the use of this chunk of code either and most notably the use of the id property? Could you elaborate please.
} // What's the difference between the filter and find methods?

// Sets the state of the playlist name to the input argument
updatePlaylistName(name) {
  this.setState({
    playlistName: name
  });
}
 // Saves  playlist to user's account
savePlaylist() {
    const trackUris = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris);
    this.setState({
      searchResults: []
    });
    this.updatePlaylistName('My playlist');
    console.info(trackUris);
  }

// Accepts search term/logs into console
search(term) {
  Spotify.search(term)
  .then(searchResults => this.setState ({
    searchResults: searchResults // Why is searchResult repeated on this line?
  }));
}

render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SearchBar
        onSearch={this.search}
      />
      <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
        <Playlist
          name={this.state.playlistName}
          tracks={this.state.playlistTracks}
          onRemove={this.removeTrack}
          onNameChange={this.updatePlaylistName} // why is .state not needed for some of these methods?
          onSave={this.savePlaylist}
        />
    </div>
  </div>
</div>
    );
  }
}

export default App;
