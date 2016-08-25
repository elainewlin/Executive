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
import SocialButtons from 'components/SocialButtons';
import * as selectors from './selectors';
import * as actions from './actions';
import styles from './styles.scss';
import EmailModal from 'components/EmailModal';

export class PostRegPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let registered = 'registering';
    if (this.props.params.registered === 'true') {
      registered = 'registered';
    }
    if (this.props.params.registered === 'false') {
      registered = 'not registered';
    }
         // <EmailForm submitEmail={this.props.onSubmitEmail} state={this.props.params.state} isSubmitted={this.props.isSubmitted} />

    return (
      <div className={styles.postRegPage}>
        <EmailModal submitEmail={this.props.onSubmitEmail} isOpen={this.props.isOpen} closeModal={this.props.closeModal} className={styles.email} status={this.props.emailStatus} />
        <PostRegForm registered={registered} state={this.props.params.state} />
        <SocialButtons />
      </div>
    );
  }
}

PostRegPage.propTypes = {
  params: React.PropTypes.object,
  onSubmitEmail: React.PropTypes.func,
  dispatch: React.PropTypes.func,
  emailStatus: React.PropTypes.string,
  closeModal: React.PropTypes.func,
  isOpen: React.PropTypes.bool,
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmitEmail: (evt) => {
      evt.preventDefault();
      dispatch(actions.submitEmail(ownProps.params));
    },
    closeModal: () => {
      dispatch(actions.closeModal());
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  emailStatus: selectors.selectEmailStatus(),
  isOpen: selectors.selectIsOpen(),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostRegPage);
