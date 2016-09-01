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

  componentDidMount() {
    this.props.dispatch(actions.showModal());
  }

  render() {
    let registered = 'registering';
    if (this.props.params.registered === 'true') {
      registered = 'registered';
    }
    if (this.props.params.registered === 'false') {
      registered = 'not registered';
    }

    let emailModal = (<EmailModal {...this.props} submitEmail={this.props.onSubmitEmail} className={styles.email} registered={registered} state={this.props.params.state} />);

    // no voter registration 
    if (this.props.params.state === 'ND') {
      emailModal = (<EmailModal {...this.props} submitEmail={this.props.onSubmitEmail} className={styles.email} registered='voting' state={this.props.params.state} />);
    }
    
    let postRegForm = (<PostRegForm registered={registered} state={this.props.params.state} />);

    // same day voter registration
    if (this.props.params.state === 'NH' || this.props.params.state === 'WY') {
      postRegForm = (<PostRegForm registered='registered' state={this.props.params.state} />);
    }

    return (
      <div className={styles.postRegPage}>
        {emailModal}
        <div>
          {postRegForm}
          <div className={styles.social}>
            <SocialButtons />
          </div>
        </div>
      </div>
    );
  }
}

PostRegPage.propTypes = {
  params: React.PropTypes.object,
  onSubmitEmail: React.PropTypes.func,
  dispatch: React.PropTypes.func,
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
  isOpen: selectors.selectIsOpen(),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostRegPage);
