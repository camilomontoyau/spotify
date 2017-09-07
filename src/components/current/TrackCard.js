import React from 'react';
import PropTypes from 'prop-types';
import './trackcard.css';
import {msToMins} from '../../util';
const TrackCard = ({currentTrack={}}) => {
  return (
    <div className="track-card">
      {!!(currentTrack.album && currentTrack.album.images) &&
      <img
        src={currentTrack.album.images[0].url}
      />}
      <ul>
        <li>
          <h2>Artist</h2>
          { !!(currentTrack.artists) ?
            currentTrack.artists.map(a=>a.name).join(',')
            :
            ''
          }
        </li>
        <li>
          <h2>Song</h2>
          { !!(currentTrack.name) ?
            currentTrack.name
            :
            ''
          }
        </li>
        <li>
          <h2>Duration</h2>
          { !!(currentTrack.duration_ms) ?
            msToMins(currentTrack.duration_ms)
            :
            ''
          }
        </li>
      </ul>
    </div>
  );
};

TrackCard.propTypes = {
  currentTrack: PropTypes.object
};

TrackCard.defaultProps = {
  currentTrack: {}
};

export default TrackCard;
