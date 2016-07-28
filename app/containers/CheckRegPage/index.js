/*
 *
 * CheckRegPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import StateSelect from 'components/StateSelect';
import CheckRegistrationForm from 'components/CheckRegistrationForm';
import * as selectors from './selectors';
import * as actions from './actions';

export class CheckRegPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(actions.fetchStates());
  }
  render() {
    return (
      <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
        <div className="page-header">
          <h1><FormattedMessage {...messages.header} /></h1>
        </div>
        <form>
          <StateSelect items={this.props.states} />
        </form>
        <CheckRegistrationForm></CheckRegistrationForm>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  states: selectors.selectStates(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckRegPage);
