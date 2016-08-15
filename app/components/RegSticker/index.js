/**
*
* The RegSticker component is shown after a user
* has registered to vote, and checked their registration
*/

import React from 'react';
// import messages from './messages';

// import styles from './styles.css';

function RegSticker() {
  return (
    <div className="reg-sticker-container">
      <div className="reg-sticker">
        <div className="sticker-flag"></div>
        <p className="sticker-message">I Registered</p>
      </div>
    </div>
  );
}

export default RegSticker;
