import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Nav = ({active='', token = ''}) => {
  return (
    <div>
    {!!(active ==='current' || active === 'search' || active==='following') &&
      <ul className="nav nav-pills">
        <li
          role="presentation"
          className={classNames({active: !!(active==='search')})}
        >
          <a href={`/search/?access_token=${token}`}>Search</a>
        </li>
        <li
          role="presentation"
          className={classNames({active: !!(active==='current')})}
        >
          <a href={`/current/?access_token=${token}`}>Current Track</a>
        </li>
        <li
          role="presentation"
          className={classNames({active: !!(active==='following')})}
        >
          <a href={`/following/?access_token=${token}`}>Following</a>
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
