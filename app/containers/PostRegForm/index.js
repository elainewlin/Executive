/*
 *
 * PostRegForm
 *
 */

import React from 'react';
import { reduxForm, change } from 'redux-form/immutable';
import * as c from './constants';
import stateDeadlines from './state_deadlines'

import fetchStates from 'containers/CheckRegPage/actions';

// Used to change pages
import { browserHistory } from 'react-router';
import TextField from 'components/TextField';

import SocialButtons from 'components/SocialButtons';
import RegSticker from 'components/RegSticker'

import VotePrompts from './vote_prompts';

export class PostRegForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       registration: "registered"
    };
  }

  buildPostRegForm(regState) {
    return (
      <div className="post-reg-form">
        <h1>Your VoteReady Status</h1>
        <p className="vote-status-header">{this.getVoteStatusPrompt(regState)}</p>

        {this.getCallToActionButton(regState)}

        Next national election: {c.VOTE_DATE}

        {this.getNextStepsInstructions(regState)}

        {this.getEmailPrompt(regState)}

        <SocialButtons />
        <RegSticker />
        <div className="post-reg-footer-container">
          {this.getFooter(regState)}
        </div>
      </div>
    );
  }

  getEmailPrompt(regState) {
    switch (regState) {
      default:
        return (
          <div className="email-reminder-container">
            <div className="email-reminder">
              <img className="email-reminder-icon">
              </img>
              <p className="email-reminder-text">
                Email Reminder >
              </p>
            </div>

            <button className="calendar-button">
              Add to Calendar
            </button>
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
      case "registered":
        return (
          <button className="call-to-action-registered">
            View Polling Place
          </button>
        );
      case "unregistered":
        return (
          <button className="call-to-action-unregistered">
            Download Registration Form
          </button>
        );
      default:
        return "";
    }
  }

  getVoteStatusPrompt(regState) {
    return VotePrompts[regState];
  }

  getNextStepsInstructions(regState) {
    // Change to actually use state from params
    // passed by the check reg form
    const state = "MA";

    switch (regState) {
      case "registered":
        return "";
      case "unregistered":
        return <div>Mail by {this.getMailInDate(state)}</div>;
      default:
        return "";
    }
  }

  // Return proper footer container based on registration state
  getFooter(regState) {
    switch (regState) {
      case "unregistered":
        return (
          <div className="post-reg-footer">
          </div>
        );
    }
  }

  // <button className="check-again-button">
  //   Check Again
  // </button>
  // OR REGISTER
  // <button className="download-form-button">
  //   Download Form
  // </button>
  render() {
    return this.buildPostRegForm(this.props.registered);
  }
}

export default PostRegForm;
