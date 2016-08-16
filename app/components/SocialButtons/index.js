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
// import messages from './messages';

import styles from './styles.scss';

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

function SocialButtons() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <span className={styles.socialText}>
          Let's vote. Together.
        </span>
        <div className={styles.buttons}>
          <FacebookShareButton
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQxxq8RSEVWAQWJEt58Ura_KSXYKShhzhYHy-gI8Xgwn0lxkwfxrpY2mY"
            title="a cute cat"
            className={styles.social}
          >
            <FacebookIcon
              size={24}
              round
            />
          </FacebookShareButton>
          <TwitterShareButton
            url="http://www.tpevent.com/wp-content/uploads/2016/01/cute-cat-images-tpevent-5.jpg"
            title="twitter cute cat"
            className={styles.social}
          >
            <TwitterIcon
              size={24}
              round
            />
          </TwitterShareButton>
        </div>
      </div>
    </footer>
  );
}

export default SocialButtons;
