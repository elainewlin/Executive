/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import styles from './styles.scss';

function Header() {
  return (
    <nav className="navbar navbar-default" id={styles.header}>
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand" activeClassName="activeRoute">
            VoteMate
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
