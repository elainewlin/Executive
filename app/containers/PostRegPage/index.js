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
import styles from './styles.scss'

export class PostRegPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    var registered = 'registering';
    if(this.props.params.registered == 'true') {
      registered = 'registered';
    }
    if(this.props.params.registered == 'false') {
      registered = 'not registered';
    }

    return (
    <div>
      <PostRegForm
        registered={registered}
        state={this.props.params.state}>
      </PostRegForm>
      <div className={styles.social}>
      <EmailForm submitEmail={this.props.onSubmitEmail} state={this.props.params.state}></EmailForm>
      <SocialButtons/>
      </div>
    </div>
    );
  }
}

PostRegPage.propTypes = {
  params: React.PropTypes.object,
  onSubmitEmail: React.PropTypes.func,
  dispatch: React.PropTypes.func,
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmitEmail: (evt) => {
      evt.preventDefault();
      dispatch(actions.submitEmail(ownProps.params));
    },
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PostRegPage);