/*
 *
 * The PostRegPage component displays whether a user
 * is registered to vote or not after using the root
 * page interface to check.
 */

import React from 'react';
import { connect } from 'react-redux';
import PostRegForm from 'containers/PostRegForm';
import EmailForm from 'components/EmailForm';

export class PostRegPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <PostRegForm registered={this.props.params.registered === 'true' ? 'registered' : 'unregistered'} />
        <EmailForm submitEmail={this.props.onSubmitEmail}></EmailForm>
      </div>
    );
  }
}

PostRegPage.propTypes = {
  params: React.PropTypes.object,
  onSubmitEmail: React.PropTypes.func,
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


export default connect(mapDispatchToProps)(PostRegPage);