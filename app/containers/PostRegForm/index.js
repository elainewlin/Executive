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
import stateNames from 'utils/state_names';
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

  buildPostRegForm(regState, stateAbbreviation) {
    return (
      <div className={styles.postRegForm}>
        <h1> 
          You are {this.getVoteStatusPrompt(regState)} to vote in {stateNames[stateAbbreviation]}
        </h1>


        {this.getRegInstructions(regState, stateAbbreviation)}
      </div>
    );
  }

  getRegInstructions(regState, stateAbbreviation) {
    switch (regState) {
      case 'registered':
        let pollingPlaceLink = pollingPlaceLinks[stateAbbreviation];

        let pollingPlaceButton = (<button className={styles.button}
          onClick={function() {
            window.location.href = pollingPlaceLink;
          }}>
          {messages.registered.cta}
        </button>);

        return (
          <div>
            <div>
              for the national election on {c.VOTE_DATE}.
            </div>
            {pollingPlaceButton}
          </div>
        );
      
      default:
        // add links lol
        return (
          <button className={styles.button}>
            {messages.unregistered.cta}
          </button>
          // if state has online registration put another button link for online registration
        );
    }
  }

  getDeadlinesDiv(regState, stateAbbreviation) {
    return <div className={styles.regdeadlinesdiv}>
      <div className={styles.regdeadline}>
        {this.getNextStepsInstructions(regState, stateAbbreviation)}
      </div>

      <span>
         
      </span>
    </div>
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

        return pollingPlaceLink ? (
          <button className={styles.button}
                  onClick={function() {
                    window.location.href = pollingPlaceLink;
                  }}>
            {messages.registered.cta}
          </button>
          // if washington or oregon, no polling place
        ) : "";
      case 'unregistered':
        // add links lol
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

  getOnlineRegistrationButton(regState, stateAbbreviation) {
    let link = onlineRegForms[stateAbbreviation];

    // return button if link exists
    return link ?
    <button className={styles.button} onClick={function() {window.location.href = link;}}>
      Online Registration
    </button>
    : "";
  }

  getVoteStatusPrompt(regState) {
    switch (regState) {
      case 'registering':
        return (<span>{messages.registering.status}</span>);
      case 'registered':
        return (<span className={styles.registered}>{messages.registered.status}</span>);
      case 'unregistered':
        return (<span className={styles.unregistered}>{messages.unregistered.status}</span>);  
    }
  }

  getNextStepsInstructions(regState, stateAbbreviation) {
    switch (regState) {
      case 'registered':
        return '';
      default:
        return (<div> Registration Deadline: {this.getMailInDate(stateAbbreviation)} </div>);
    }
  }

  render() {
    return this.buildPostRegForm(this.props.registered, this.props.state);
  }
}

PostRegForm.propTypes = {
  registered: React.PropTypes.string,
};

export default PostRegForm;
