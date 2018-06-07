import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({item= {}, index=0}) => {
  return (
    <tr>
      <td>
        {index}
      </td>
      <td>
        {item.name ? item.name : ''}
      </td>
      <td>
        {item.popularity ? item.popularity : 0}
      </td>
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
