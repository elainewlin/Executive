/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import styles from './styles.scss';
import {
  ShareButtons,
} from 'react-share';

const {
  FacebookShareButton,
  TwitterShareButton,
} = ShareButtons;

export default class AboutPage extends React.Component  { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.about}>
        <h1>
          Voting is confusing, but it shouldn’t be. 
        </h1>
        <div>
          We, a small team at MIT, built votemate to make voting easier.
        </div>
        <div>
        Here’s what votemate does for you:
          <ul>
            <li>Check if you’re registered to vote</li>
            <li>Guide you through your state’s registration process</li>
            <li>Remind you to register in time</li>
            <li>Inform you where and when to vote on Election Day</li>
          </ul>
        </div>
        <div>
        We check your registration status directly with your state’s official website or a national database.
        </div>
        <div>
          Want to help your friends register? 
          Share votemate on <FacebookShareButton url="https://votemate.us/" title="votemate" className={styles.link}>Facebook</FacebookShareButton> or <TwitterShareButton url="https://votemate.us/" title="Are you registered to vote? Check your voter registration at" className={styles.link}>Twitter</TwitterShareButton>
          , or even run your own <a href="https://static.votemate.us/voter_registration_forms/guide.pdf" className={styles.link} download>voter registration drive</a>. 
          Feel free to contact us at <a href="mailto:info@votemate.us" className={styles.link}>info@votemate.us</a> for any questions or comments.
        </div>
        <div>
        We would like to thank the MIT Sandbox Initiative, Professor Charles Stewart, and Andy Sellars for their continued mentorship and support.
        </div>
      </div>
    );
  }
}
