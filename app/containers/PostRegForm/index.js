/*
 *
 * PostRegForm
 *
 */

import React from 'react';
import { reduxForm, change } from 'redux-form/immutable';
import SocialButtons from 'components/SocialButtons';
import * as c from './constants';

import fetchStates from 'containers/CheckRegPage/actions';

// Used to change pages
import { browserHistory } from 'react-router';
import TextField from 'components/TextField';

import RegSticker from 'components/RegSticker'

export class PostRegForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       registration: "lmao"
    };
  }

  componentDidMount () {
    // this.setState({
    //   registration: "unregistered"
    // });
  }

  buildPostRegForm() {
    switch(this.state.registration) {
      case "unregistered":
        return "Nope, but register now?";
      case "registered":
        //header
        //card
        //vote on nov 8
        //social buttons
        return "Yes! You are registered to vote!";
      default:
        //state
        //first, last

        return "You're almost VoteReady! Print and mail your form!";
    }
  }

  getInstructionText() {
    switch(this.state.registration) {
      case "unregistered":
        return "Nope, but register now?";
      case "registered":
        return "Yes! You are registered to vote!";
      default:
        return "You're almost there! Print and mail your form!";
    }
  }

  render() {
    return (
      <div className="post-reg-form">
        <p>{this.getInstructionText()}</p>
        <div className="registered-card-container">
          card content here
        </div>
        <div>Mail by {c.MAIL_IN_DATE}</div>
        <SocialButtons />
      </div>
    );
  }
}

export default PostRegForm;
