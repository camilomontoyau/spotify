import React from 'react';
import PropTypes from 'prop-types';

const ResultsTable = ({results=[]}) => {
  return (
    <table className="table table-striped">
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  );
};

ResultsTable.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object)
};

ResultsTable.defaultProps = {
  results: []
};

export default ResultsTable;
