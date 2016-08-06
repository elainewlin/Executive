/**
*
* SocialButtons
*
*/

import React from 'react';
import messages from './messages';

import styles from './styles.css';

function SocialButtons() {
  return (
    <div className="buttons-container">
      <button className="facebook-button">
        {messages.button.facebookButton}
      </button>
      <button className="twitter-button">
        {messages.button.twitterButton}
      </button>
    </div>
  );
}

export default SocialButtons;
