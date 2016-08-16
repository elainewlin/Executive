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
import stateDeadlines from './state_deadlines';
import stateNames from './state_names';
import onlineRegForms from './online_registration_forms';
import messages from './messages';
// Misc components
import votePrompts from './vote_prompts';

export class PostRegForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      registration: 'registered',
    };
  }

  getEmailPrompt(regState) {
    switch (regState) {
      default:
        return (
          <div className="email-reminder-container">
            <div className="email-reminder">
              <img className="email-reminder-icon" alt="email-reminder-icon" />
              <p className="email-reminder-text">
                Email Reminder >
              </p>
            </div>
          </div>
        );
    }
  }

  getMailInDate(state) {
    // change to grab proper default state?
    if (!stateDeadlines[state]) {
      return c.MAIL_IN_DATE;
    }

    return stateDeadlines[state];
  }

  getCallToActionButton(regState) {
    switch (regState) {
      case 'registered':
        return (
          <button className={styles.button}>
            {messages.registered.cta}
          </button>
          // if washington or oregon, no polling place
        );
      case 'unregistered':
        return (
          <button className={styles.button}>
            {messages.unregistered.cta}
          </button>
          // if state has online registration put another button link for online registration
        );
      default:
        return '';
    }
  }

  getCurrentStateName(state) {
    return stateNames[state];
  }

  getOnlineRegistrationLink(state) {
    return onlineRegForms[state];
  }

  getVoteStatusPrompt(regState) {
    return votePrompts[regState];
  }

  getNextStepsInstructions(regState) {
    // Change to actually use state from params
    // passed by the check reg form
    // const state = 'MA';

    switch (regState) {
      case 'registered':
        return '';
      case 'unregistered':
        return <div>Mail by {this.getMailInDate(regState)}</div>;
      default:
        return '';
    }
  }

  // Return proper footer container based on registration state
  getFooter(regState) {
    switch (regState) {
      case 'unregistered':
        return (
          <div className="post-reg-footer">
          </div>
        );
      default:
        return '';
    }
  }

  buildPostRegForm(regState, stateAbbreviation) {
    return (
      <div className={styles.postregform}>
        <p className={styles.regheader}> You are <span className={regState === "registered" ? styles.registered : styles.unregistered}> {this.getVoteStatusPrompt(regState)} </span> to vote in {this.getCurrentStateName(stateAbbreviation)}.
        </p>
        <div>{this.getCallToActionButton(regState)}</div>
        <div className={styles.regdeadline}> {this.getNextStepsInstructions(regState)}</div>
        <p className={styles.nextelection}> Next national election: {c.VOTE_DATE} </p>

        {this.getEmailPrompt(regState)}

        <div className="post-reg-footer-container">
          {this.getFooter(regState)}
        </div>
      </div>
    );
  }

  // <button className="check-again-button">
  //   Check Again
  // </button>
  // OR REGISTER
  // <button className="download-form-button">
  //   Download Form
  // </button>
  render() {
    return this.buildPostRegForm(this.props.registered, this.props.state);
  }
}

PostRegForm.propTypes = {
  registered: React.PropTypes.string,
};

export default PostRegForm;
