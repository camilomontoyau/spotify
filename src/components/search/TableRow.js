import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({item= {}}) => {
  return (
    <tr>
      <td>
        {!!(item.artists.length) &&
        item.artists.map(artist=>artist.name).join(',')}
      </td>
      <td>{item.name ? item.name : ''}</td>
      <td>{item.album && item.album.name ? item.album.name : ''}</td>
    </tr>
  );
};

TableRow.propTypes = {
  item: PropTypes.object
};

TableRow.defaultProps = {
  item: {}
};

export default TableRow;
