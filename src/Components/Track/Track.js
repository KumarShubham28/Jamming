import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this._bind('addTrack', 'removeTrack');
  }
// displays + or - depending on removal or addition of track
  renderAction() {
    if (this.props.onAdd) {
      return <a className='Track-action' onClick={this.addTrack}>+</a>;
    } else {
      return <a className='Track-action' onClick={this.removeTrack}>-</a>;
    }
  }

addTrack() {
  this.props.onAdd(this.props.track); // Adds this.props.track to the playlist
}

removeTrack () {
  this.props.onRemove(this.props.track);
}

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction} // renders method up top
      </div>
    );
  }
}

export default Track;
