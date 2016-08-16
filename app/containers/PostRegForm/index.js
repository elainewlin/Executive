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

// Misc components
import SocialButtons from 'components/SocialButtons';
import RegSticker from 'components/RegSticker';
import votePrompts from './vote_prompts';

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

  getCallToActionButton(regState) {
    switch (regState) {
      case 'registered':
        return (
          <button className={styles.registeredbutton}>
            View Polling Place
          </button>
          // if washington or oregon, no polling place
        );
      case 'unregistered':
        return (
          <button className={styles.downloadbutton}>
            Download Registration Form
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
        <h1>Your Registration Status</h1>

        <p className={styles.regheader}> You are <span className={regState === "registered" ? styles.regstatusgreen : styles.regstatus}> {this.getVoteStatusPrompt(regState)} </span> to vote in {this.getCurrentStateName(stateAbbreviation)}.
        </p>

        <div>{this.getCallToActionButton(regState)}</div>
        <div className={styles.regdeadline}> {this.getNextStepsInstructions(regState)}</div>
        <p className={styles.nextelection}> Next national election: {c.VOTE_DATE} </p>

        <SocialButtons />
        <RegSticker />
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
