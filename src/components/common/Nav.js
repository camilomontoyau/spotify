import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({active='', token = ''}) => {
  return (
    <div>
    {active ==='current' &&
      <ul className="nav nav-pills">
        <li
          role="presentation"
        >
          <a href={`/search/?access_token=${token}`}>Search</a>
        </li>
        <li
          role="presentation"
          className="active"
        >
          <a href={`/current/?access_token=${token}`}>Current Track</a>
        </li>
      </ul>}
      {active==='search' &&
        <ul className="nav nav-pills">
          <li
            role="presentation"
            className="active"
          >
            <a href={`/search/?access_token=${token}`}>Search</a>
          </li>
          <li
            role="presentation"
          >
            <a href={`/current/?access_token=${token}`}>Current Track</a>
          </li>
        </ul>}
        
      {(active!=='search' && active !== 'current') &&
        <ul className="nav nav-pills">
          <li
            role="presentation"
            className="active">
            <a href="/">
              Login
            </a>
          </li>
        </ul>}
    </div>
  );
};

Nav.propTypes = {
  token: PropTypes.string,
  active: PropTypes.string
};

Nav.defaultTypes = {
  token: '',
  active: ''
};

export default Nav;
