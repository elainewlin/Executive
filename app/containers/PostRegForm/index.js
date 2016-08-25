/*
 *
 * The PostRegForm Component is displayed within
 * the PostRegPage container.
 */

// React
import React from 'react';

// Styling
import styles from './styles.scss';

// Misc constants
import * as c from './constants';

// Dynamic form objects
import stateDeadlines from './state_deadlines';
import onlineRegForms from './online_registration_forms';
import messages from './messages';
import pollingPlaceLinks from './polling_place_links';

export class PostRegForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      registration: 'registered',
    };
  }

  getMailInDate(state) {
    // change to grab proper default state?
    if (!stateDeadlines[state]) {
      return c.MAIL_IN_DATE;
    }
    return stateDeadlines[state];
  }

  getRegInstructions(regState, stateAbbreviation) {
    const pollingPlaceLink = pollingPlaceLinks[stateAbbreviation];
    const onlineLink = onlineRegForms[stateAbbreviation];
    const mailInLink = `http://static.votemate.us/voter_registration_forms/${stateAbbreviation}.pdf`;
    let onlineRegButton;

    if (onlineLink) {
      onlineRegButton = (
        <div>
          <a href={onlineLink} className={styles.link}>
            <button className={styles.button}>
              {messages.unregistered.online}
            </button>
          </a>
        </div>);
    }

    switch (regState) {
      case 'registered':
        return (
          <div>
            <a href={pollingPlaceLink} className={styles.link}>
              <button className={styles.button}>
                {messages.registered.cta}
              </button>
            </a>
          </div>
        );
      default:
        return (
          <div>
            <a href={mailInLink} download className={styles.link}>
              <button className={styles.button}>
                {messages.unregistered.mail}
              </button>
            </a>
            {onlineRegButton}
          </div>
        );
    }
  }

  getMessage(regState, stateAbbreviation) {
    switch (regState) {
      case 'registered':
        return (
          <div>
            Vote on <b>November 8</b>
          </div>
        );
      case 'not registered':
        return (
          <div>
            Register by <b>{this.getMailInDate(stateAbbreviation)}</b>
          </div>
        );
      default:
        return (
          <div>
            Register to vote by <b>{this.getMailInDate(stateAbbreviation)}</b>
          </div>
        );
    }
  }

  buildPostRegForm(regState, stateAbbreviation) {
    return (
      <div className={styles.postRegForm}>
        <div className={styles.header}>
          {this.getMessage(regState, stateAbbreviation)}
        </div>
        <div className={styles.regInstructions}>
          {this.getRegInstructions(regState, stateAbbreviation)}
        </div>
      </div>
    );
  }

  render() {
    return this.buildPostRegForm(this.props.registered, this.props.state);
  }
}

PostRegForm.propTypes = {
  registered: React.PropTypes.string,
  state: React.PropTypes.string,
};

export default PostRegForm;
