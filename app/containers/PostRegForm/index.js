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
        <h1 className={styles.header}> 
          You are {regState} to vote on <b>Nov 8</b>
        </h1>
        <hr></hr>
        <div className={styles.regInstructions}>
          {this.getRegInstructions(regState, stateAbbreviation)}
        </div>
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
            <h3>Democratic Party</h3>
            {pollingPlaceButton}
          </div>
        );
      
      default:
        let link = onlineRegForms[stateAbbreviation];
        
        return (
          <div>
            <h2>Register to vote by <b>{this.getMailInDate(stateAbbreviation)}</b></h2>
            <div className={styles.unregisteredButtons}>
            <button className={styles.button}>
              {messages.unregistered.mail}
            </button>
            <button className={styles.button} onClick={function() {window.location.href = link;}}>
              {messages.unregistered.online}
            </button>
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

  render() {
    return this.buildPostRegForm(this.props.registered, this.props.state);
  }
}

PostRegForm.propTypes = {
  registered: React.PropTypes.string,
};

export default PostRegForm;
