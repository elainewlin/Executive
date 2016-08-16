/*
 *
 * The PostRegPage component displays whether a user
 * is registered to vote or not after using the root
 * page interface to check.
 */

import React from 'react';
import PostRegForm from 'containers/PostRegForm';
import SocialButtons from 'components/SocialButtons';

export class PostRegPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
    <div>
      <PostRegForm
        registered={this.props.params.registered === 'true' ? 'registered' : 'unregistered'}
        state={this.props.params.state}>
      </PostRegForm>
      <SocialButtons />
    </div>
    );
  }
}

PostRegPage.propTypes = {
  params: React.PropTypes.object,
};

export default PostRegPage;
