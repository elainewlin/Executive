/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import EmailForm from 'components/EmailForm';
import * as actions from './actions';
import * as selectors from './selectors';
import { createStructuredSelector } from 'reselect';

export class ReminderPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.email}>
        <div className={styles.heading}>Sign up for reminders</div>
        <EmailForm registered="reminders" submitEmail={this.props.onSubmitEmail} status={this.props.emailStatus} />
      </div>
    );
  }
}

ReminderPage.propTypes = {
  onSubmitEmail: React.PropTypes.func,
  dispatch: React.PropTypes.func,
  emailStatus: React.PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    onSubmitEmail: (evt) => {
      evt.preventDefault();
      dispatch(actions.submitForm());
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  emailStatus: selectors.selectEmailStatus(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReminderPage);
