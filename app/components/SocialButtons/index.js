/**
*
* SocialButtons
*
*/

import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  TwitterShareButton,
} = ShareButtons;

import React from 'react';

import styles from './styles.scss';

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

function SocialButtons() {
  return (
    <footer className={styles.footer}>
      <span className={styles.socialText}>
        Share with friends
      </span>
      <div className={styles.buttons}>
        <FacebookShareButton
          url="https://votemate.us/"
          title="votemate"
          className={styles.social}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url="https://votemate.us/"
          title="Are you registered to vote? Check your voter registration at"
          className={styles.social}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </footer>
  );
}

export default SocialButtons;
