/*
 *
 * PostRegForm
 *
 */

import React from 'react';
import { reduxForm, change } from 'redux-form/immutable';
import * as c from './constants';

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
       registration: "unregistered"
    };
  }

  buildPostRegForm(regState) {
    return (
      <div className="post-reg-form">
        <p>{this.getInstructionText(regState)}</p>
        <RegSticker />
        <div>Mail by {c.MAIL_IN_DATE}</div>
        <div className="post-reg-footer-container">
          {this.getFooter(regState)}
        </div>
      </div>
    );
  }

  getInstructionText(regState) {
    return VotePrompts[regState];
  }

  // Return proper footer container based on registration state
  getFooter(regState) {
    switch (regState) {
      case "unregistered":
        return (
          <div className="post-reg-footer">
            <button className="check-again-button">
              Check Again
            </button>
            OR REGISTER
            <button className="download-form-button">
              Download Form
            </button>
          </div>
        );
      default:
        return <SocialButtons />;
    }
  }

  render() {
    return this.buildPostRegForm(this.state.registration);
  }
}

export default PostRegForm;
