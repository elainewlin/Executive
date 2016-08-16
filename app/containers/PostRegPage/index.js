/*
 *
 * The PostRegPage component displays whether a user
 * is registered to vote or not after using the root
 * page interface to check.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PostRegForm from 'containers/PostRegForm';
import EmailForm from 'components/EmailForm';
import SocialButtons from 'components/SocialButtons';
import * as selectors from './selectors';
import * as actions from './actions';

export class PostRegPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    <div>
      <PostRegForm
        registered={this.props.params.registered === 'true' ? 'registered' : 'unregistered'}
        state={this.props.params.state}>
      </PostRegForm>
      <EmailForm submitEmail={this.props.onSubmitEmail} state={this.props.params.state}></EmailForm>
      <SocialButtons />
    </div>
    );
  }
}

PostRegPage.propTypes = {
  params: React.PropTypes.object,
  onSubmitEmail: React.PropTypes.func,
  dispatch: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onSubmitEmail: (evt) => {
      evt.preventDefault();
      dispatch(actions.submitEmail());
    },
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PostRegPage);