/**
*
* SocialButtons
*
*/

import {
  ShareButtons,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
} = ShareButtons;

import React from 'react';
import messages from './messages';

import styles from './styles.css';

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');

function SocialButtons() {
  return (
    <div className="buttons-container">
      <FacebookShareButton
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQxxq8RSEVWAQWJEt58Ura_KSXYKShhzhYHy-gI8Xgwn0lxkwfxrpY2mY"
            title="a cute cat"
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={32}
              round />
      </FacebookShareButton>
      <TwitterShareButton
        url="http://www.tpevent.com/wp-content/uploads/2016/01/cute-cat-images-tpevent-5.jpg"
        title="twitter cute cat"
        className="Demo__some-network__share-button">
        <TwitterIcon
          size={32}
          round />
      </TwitterShareButton>
    </div>
  );
}

export default SocialButtons;
