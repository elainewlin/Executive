/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import logo from './logo.png';
import styles from './styles.scss';

function Header() {
  return (
    <nav className="navbar navbar-default" id={styles.header}>
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand" activeClassName="activeRoute">
            <img src={logo} className={styles.logo} alt="VoteMate" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
