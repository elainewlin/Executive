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
import stateNames from 'utils/state_names';
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
    let registerComponent;

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

    if (this.props.currentState != "") {
      registerComponent = (
        <div>
          <hr></hr>
          <div className={styles.test}>Know you aren't registered?</div>
          <button onClick={this.props.registerNow} className={styles.registerButton}>
            Register in {stateNames[this.props.currentState]}
          </button>
        </div>
      );
    } 

    return (
      <div>
        <div>
          <div className={styles.header}>
            <FormattedMessage {...messages.header} />
          </div>
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
            <div className={styles.checkRegPage}>
              <StateSelect states={this.props.states} onChange={this.props.onChangeState} currentState={this.props.currentState} />
              {apiErrMsg}
              {formBody}
              {registerComponent}
            </div>
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
  registerNow: React.PropTypes.func,
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
    registerNow: () => {
      dispatch(actions.registerNow());
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckRegPage);
