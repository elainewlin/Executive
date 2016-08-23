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
    let onlineRegButton;

    if (onlineLink) {
      onlineRegButton = (<button
        className={styles.button}
        onClick={function() { window.location.href = onlineLink; }}
      >
        {messages.unregistered.online}
      </button>);
    }

    switch (regState) {
      case 'registered':
        return (
          <div>
            <button
              className={styles.button}
              onClick={function() { window.location.href = pollingPlaceLink; }}
            >
              {messages.registered.cta}
            </button>
          </div>
        );
      default:

        return (
          <div>
            <h3 className={styles.subHead}>Register to vote by <b>{this.getMailInDate(stateAbbreviation)}</b></h3>
            <button className={styles.button}>
              {messages.unregistered.mail}
            </button>
            {onlineRegButton}
          </div>
        );
    }
  }

  buildPostRegForm(regState, stateAbbreviation) {
    return (
      <div className={styles.postRegForm}>
        <div className={styles.header}>
          You are {regState} to vote <span className={styles.voteDay}>on <b>Nov 8</b></span>
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
