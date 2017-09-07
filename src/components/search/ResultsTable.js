import React from 'react';
import PropTypes from 'prop-types';
import TableHead from './TableHead';
import TableRow from "./TableRow";

const ResultsTable = ({results=[]}) => {
  return (
    <table className="table table-striped">
      <TableHead/>
      <tbody>
        {!!(results.length) &&
          results.map((item, idx)=>
            <TableRow
              key={idx}
              item={item}
            />
        )}
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
