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
import styles from './styles.scss';
import StateSelect from 'components/StateSelect';
import CheckRegForm from 'containers/CheckRegForm';
import * as selectors from './selectors';
import * as actions from './actions';

export class CheckRegPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.dispatch(actions.fetchStates());
    this.props.dispatch(actions.fetchInitialState());
  }

  render() {
    let formBody;
    let formResults;
    let apiErrMsg;
    if (!this.props.loading && this.props.formData) {
      if (this.props.formData.enabled) {
        formBody = (
          <CheckRegForm
            fields={this.props.formData.fields}
            onSubmit={this.props.onSubmit}
          />
        );
      } else {
        formBody = this.props.formData.disabled_message;
      }
    }

    if (this.props.results) {
      formResults = JSON.stringify(this.props.results, null, 2);
    }

    if (this.props.apiErrMsg.length > 0) {
      apiErrMsg = (
        <div className="row">
          <div className="col-xs-12 alert alert-warning">
            {this.props.apiErrMsg}
          </div>
        </div>
      );
    }

    return (
      <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
        <div>
          <div className={styles.header}>
            <FormattedMessage {...messages.header} />
          </div>
          <div className={styles.checkRegPage}>
            <StateSelect states={this.props.states} onChange={this.props.onChangeState} currentState={this.props.currentState} />
            {apiErrMsg}
            {formBody}
          </div>
          <div className={styles.message}>
            If you are not registered, then download your
            <span>
              <a target="_blank" href="http://www.eac.gov/assets/1/Documents/Federal%20Voter%20Registration_1-25-16_ENG.pdf" className={styles.link}> registration form</a>!
            </span>
          </div>
          <div id="formResults" className={styles.formResults}>{formResults}</div>
        </div>
      </div>
    );
  }
}

CheckRegPage.propTypes = {
  formData: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  states: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  loading: React.PropTypes.bool,
  results: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  onChangeState: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
  dispatch: React.PropTypes.func,
  currentState: React.PropTypes.string,
  apiErrMsg: React.PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  states: selectors.selectStates(),
  currentState: selectors.selectCurrentState(),
  formData: selectors.selectFormData(),
  loading: selectors.selectLoading(),
  results: selectors.selectResults(),
  apiErrMsg: selectors.selectApiErrMsg(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeState: (evt) => {
      dispatch(actions.changeState(evt.target.value));
    },
    onSubmit: (evt) => {
      evt.preventDefault();
      dispatch(actions.submitForm());
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckRegPage);
