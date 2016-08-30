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
  let facebookPath = 'M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z';
  let twitterPath = 'M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z';

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="" className={styles.link}>
          <span className={styles.vote}>vote</span>
          <span className={styles.mate}>mate</span>
        </a>
      </div>

      <span className={styles.buttons}>
        <a href="https://www.facebook.com/Votemate-1037798892964684/">
          <svg viewBox="0 0 64 64" className={styles.outer}>
            <g>
              <path d={facebookPath}></path>
            </g>
          </svg>
        </a>
        <a href="https://twitter.com/USVoteMate">
          <svg viewBox="0 0 64 64" className={styles.outer}>
            <g>
              <path d={twitterPath}></path>
            </g>
          </svg>
        </a>
      </span>
      <hr className={styles.line}></hr>
    </div>
  );
}

export default Header;
