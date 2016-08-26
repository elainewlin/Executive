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
import stateNames from 'utils/state_names';

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

  getInstructions(regState, stateAbbreviation) {
    const pollingPlaceLink = pollingPlaceLinks[stateAbbreviation];
    const onlineLink = onlineRegForms[stateAbbreviation];
    const mailInLink = `http://static.votemate.us/voter_registration_forms/${stateAbbreviation}.pdf`;
    let onlineReg;

    if (onlineLink) {
      onlineReg = (
        <div className={styles.onlineReg}>
          If you have a {stateNames[stateAbbreviation]} driver's license, <a href={onlineLink} className={styles.link}>{messages.unregistered.online}</a>
        </div>);
    }

    switch (regState) {
      case 'registered':
        return (
          <div>
          <div className={styles.test}>To register for the national election,</div>
            <ol className={styles.instructions}>
              <li>Find polling place</li>
              <li>Bring ID</li>
              <li>Vote between 7 am and 8 pm </li>
            </ol>

           <a href={pollingPlaceLink} className={styles.button}>
            <i className="glyphicon glyphicon-map-marker"></i>
              Polling Place
          </a>
          </div>
        );
      default:
        return (
          <div>
            <div className={styles.test}>To register for the national election,</div>
            <ol className={styles.instructions}>
              <li>Print form </li>
              <li>Fill out form</li>
              <li>Mail form</li>
            </ol>
           <a href={mailInLink} download className={styles.button}>
            <i className="glyphicon glyphicon-download-alt"></i>
              {messages.unregistered.mail}
          </a>
            {onlineReg}
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
            Register by <b>{this.getMailInDate(stateAbbreviation)}</b>
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
          {this.getInstructions(regState, stateAbbreviation)}
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
