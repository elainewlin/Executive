/*
 *
 * CheckRegForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { reduxForm } from 'redux-form/immutable';
import messages from './messages';
import styles from './styles.scss';
import StateSelect from 'components/StateSelect';
import TextField from 'components/TextField';
import SelectField from 'components/SelectField';
import CheckField from 'components/CheckField';
import FormLabel from 'components/FormLabel';
import * as selectors from './selectors';
import * as actions from './actions';
import * as c from './constants';

export class CheckRegForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.dispatch(actions.fetchStates());
    this.props.dispatch(actions.fetchInitialState());
  }


  buildFormBody(fields) {
    const formBody = [];
    const formLabels = new Set();
    const fieldsetToLabel = {
      name: 'Name',
      dob: 'Birthday',
      residence: 'Address',
      id: 'Identification',
    };
    for (const field of fields) {
      const label = fieldsetToLabel[field.fieldset];
      if (!formLabels.has(label)) {
        formBody.push((<FormLabel label={label} key={label} />));
        formLabels.add(label);
      }
      switch (field.type) {
        case c.TEXT_FIELD:
          formBody.push((
            <TextField
              key={field.name_attr}
              label={field.label}
              name={field.name_attr}
              width={field.width}
              validation={field.conf}
            />
          ));
          break;
        case c.SELECT_FIELD: {
          const options = field.conf.split(',').map(
            (option) => option.split(':')
          );
          formBody.push((
            <SelectField
              key={field.name_attr}
              label={field.label}
              name={field.name_attr}
              width={field.width}
              options={options}
            />
          ));
          break;
        }
        case c.CHECK_FIELD:
          formBody.push((
            <CheckField
              key={field.name_attr}
              label={field.label}
              name={field.name_attr}
              width={field.width}
              description={field.conf}
            />
          ));
          break;
        default:
          // do nothing
          break;
      }
    }
    if (formBody.length > 0) {
      formBody.push((
        <input
          key="form-submit"
          type="submit"
          className={`btn btn-default ${styles.button}`}
          id={styles.button}
          name="checkregbutton"
          value="Check Registration"
        />
      ));
    }
    return formBody;
  }

  render() {
    let formBody;
    let formResults;
    let apiErrMsg;
    if (!this.props.loading && this.props.formData) {
      if (this.props.formData.enabled) {
        formBody = (
          <form id="checkregform" onSubmit={this.props.onSubmit}>
            {this.buildFormBody(this.props.formData.fields)}
          </form>
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
          <div className={styles.checkRegForm}>
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

CheckRegForm.propTypes = {
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

export default reduxForm({
  form: 'checkRegForm',
  destroyOnUnmount: false,
})(connect(mapStateToProps, mapDispatchToProps)(CheckRegForm));
