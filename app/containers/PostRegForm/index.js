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
import pollHours from './poll_hours';
import stateSites from './state_sites';
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
    let onlineReg;
    let stateSite;

    let voteButtonText = (
      <span>
        <i className="glyphicon glyphicon-map-marker"></i> Polling Place
      </span>
    );

    let voteInstructions = (
      <ol>
        <li>Find polling place</li>
        <li>Bring <a className={styles.link} href={`https://www.google.com/#q=${stateAbbreviation}%20voter%20id%20requirements&rct=j&eob=va/2/10`}>valid ID</a></li>
        <li>Vote {pollHours[stateAbbreviation]} </li>
      </ol>
    );
    let mailInLink = `http://static.votemate.us/voter_registration_forms/${stateAbbreviation}.pdf`;

    // instructions for OR and WA, no polling place, mail-in ballot
    if (stateAbbreviation === 'OR' || stateAbbreviation === 'WA') {
      voteInstructions = (
        <ol>
          <li>Receive ballot in mail</li>
          <li>Complete ballot</li>
          <li>Mail in ballot</li>
        </ol>
        );
      voteButtonText = (
        <span>
          <i className="glyphicon glyphicon-check"></i> Check Ballot
        </span>
      );
    }

    if (onlineLink) {
      onlineReg = (
        <div className={styles.notRegText}>
          If you have a {stateNames[stateAbbreviation]} driver's license, <a href={onlineLink} className={styles.link}>{messages.unregistered.online}</a>.
        </div>);
    }

    const stateWebsite = stateSites[stateAbbreviation];
    if (regState === 'not registered' && stateWebsite) {
      stateSite = (<div className={styles.notRegText}>Think you're registered? Check <a href={stateWebsite} className={styles.link}>your state site</a>.</div>);
    }

    switch (regState) {
      case 'registered':
        return (
          <div>
            <div className={styles.instructions}>
              <div>To vote in the national election,</div>
              {voteInstructions}
            </div>
            <a href={pollingPlaceLink} className={styles.button}>
              {voteButtonText}
            </a>
            <div className={styles.regText}>
              Not here? Get <a href="https://www.vote.org/absentee-ballot/" className={styles.link}>absentee ballot information</a>.
            </div>
          </div>
        );
      default:
        return (
          <div>
            <div className={styles.instructions}>
              <div className={styles.test}>To register for the national election,</div>
              <ol>
                <li>Print form </li>
                <li>Fill out form</li>
                <li>Mail form</li>
              </ol>
            </div>
            <a href={mailInLink} download className={styles.button}>
              <i className="glyphicon glyphicon-download-alt"></i> Download PDF
            </a>
            {onlineReg}
            {stateSite}
          </div>
        );
    }
  }

  getMessage(regState, stateAbbreviation) {
    let special;

    // same day voter registration for NH and WY
    if (stateAbbreviation === 'NH' || stateAbbreviation === 'WY') {
      special = (<div>Same day registration</div>);
    }

    if (stateAbbreviation === 'ND') {
      special = (<div>No voter registration</div>);
    }

    switch (regState) {
      case 'registered':
        return (
          <div>
            {special}
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
