/*
 *
 * The PostRegForm Component is displayed within
 * the PostRegPage container.
 */

// React
import React from 'react';

// React Router
import { browserHistory } from 'react-router';

// Styling
import styles from './styles.scss';

// Misc constants
import * as c from './constants';

// Dynamic form objects
import stateDeadlines from './state_deadlines';
import stateNames from './state_names';
import onlineRegForms from './online_registration_forms';
import pollingPlaceLinks from './polling_place_links';

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

  buildPostRegForm(regState, stateAbbreviation) {
    return (
      <div className={styles.postregform}>
        <p className={styles.regheader}> You are <span className={regState === "registered" ? styles.regstatusgreen : styles.regstatus}> {this.getVoteStatusPrompt(regState)} </span> to vote in {this.getCurrentStateName(stateAbbreviation)}.
        </p>

        {this.getRegInstructionsDiv(regState, stateAbbreviation)}

        {this.getEmailPrompt(regState)}

        <div className="post-reg-footer-container">
          {this.getFooter(regState)}
        </div>
      </div>
    );
  }
  // <RegSticker />

  getRegInstructionsDiv(regState, stateAbbreviation) {
    return (<div className={styles.reginstructionsdiv}>
        {this.getCallToActionDiv(regState, stateAbbreviation)}
        {this.getDeadlinesDiv(regState, stateAbbreviation)}
    </div>);
  }

  getDeadlinesDiv(regState, stateAbbreviation) {
    return <div className={styles.regdeadlinesdiv}>
      <div className={styles.regdeadline}>
        {this.getNextStepsInstructions(regState, stateAbbreviation)}
      </div>

      <p className={styles.nextelection}>
         National election: {c.VOTE_DATE}
      </p>
    </div>
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

  getCallToActionDiv(regState, stateAbbreviation) {
    return <div className={styles.calltoactioncontainer}>
      {this.getCallToActionButton(regState, stateAbbreviation)}
      {this.getOnlineRegistrationButton(regState, stateAbbreviation)}
    </div>
  }

  getCallToActionButton(regState, stateAbbreviation) {
    switch (regState) {
      case 'registered':
        let pollingPlaceLink = pollingPlaceLinks[stateAbbreviation];

        console.log(browserHistory);

        return pollingPlaceLink ? (
          <button className={styles.registeredbutton}
                  onClick={function() {
                    window.location.href = pollingPlaceLink;
                  }}>
            View Polling Place
          </button>
          // if washington or oregon, no polling place
        ) : "";
      case 'unregistered':
        // add links lol
        return (
          <button className={styles.downloadbutton}>
            Mail-In Form
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

  getOnlineRegistrationButton(regState, stateAbbreviation) {
    switch (regState) {
      case "registered":
        return "";
    }

    let link = onlineRegForms[stateAbbreviation];

    // return button if link exists
    return link ?
    <button className={styles.downloadbutton}
            onClick={function() {
              window.location.href = link;
            }}>
      Online Registration
    </button>
    : "";
  }

  getOnlineRegistrationLink(state) {
    return onlineRegForms[state];
  }

  getVoteStatusPrompt(regState) {
    return votePrompts[regState];
  }

  getNextStepsInstructions(regState, stateAbbreviation) {
    // Change to actually use state from params
    // passed by the check reg form
    // const state = 'MA';

    switch (regState) {
      case 'registered':
        return '';
      case 'unregistered':
        return (<div>
          Registration Deadline: {this.getMailInDate(stateAbbreviation)}
        </div>);
      default:
        return '';
    }
  }

  // Return proper footer container based on registration state
  getFooter(regState) {

    return (<div className={styles.postregfooter}>
      <p className={styles.postregfootertext}>{c.SLOGAN}</p>
      <SocialButtons />
    </div>);
    //
    // switch (regState) {
    //   case 'unregistered':
    //     return (
    //       <div className="post-reg-footer">
    //       </div>
    //     );
    //   default:
    //     return '';
    // }
  }

  render() {
    return this.buildPostRegForm(this.props.registered, this.props.state);
  }
}

PostRegForm.propTypes = {
  registered: React.PropTypes.string,
};

export default PostRegForm;
