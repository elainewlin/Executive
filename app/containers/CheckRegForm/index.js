/*
 *
 * CheckRegForm
 *
 */

import React from 'react';
// import { connect } from 'react-redux';
import styles from './styles.scss';
import { reduxForm, change } from 'redux-form/immutable';
import TextField from 'components/TextField';
import SelectField from 'components/SelectField';
import CheckField from 'components/CheckField';
import stateSites from '../PostRegForm/state_sites';
import * as c from './constants';

export class CheckRegForm extends React.Component { // eslint-disable-line react/prefer-stateless-

  componentDidMount() {
    // Dispatch change events for the hidden fields to put their values in the state
    for (const field of this.props.fields) {
      if (field.type === c.HIDDEN_FIELD) {
        this.props.dispatch(change('CheckRegForm', field.name_attr, field.conf));
      }
    }
  }

  buildFormBody() {
    let isFirst = true;
    const formBody = [];
    const formLabels = new Set();
    const fieldsetToLabel = {
      name: 'Name',
      dob: 'Birthday',
      residence: 'Residence',
      id: 'Identification',
    };
    for (const field of this.props.fields) {
      const label = fieldsetToLabel[field.fieldset];
      if (!formLabels.has(label) && label) {
        formBody.push((
          <div className="col-xs-12" key={label}>
            <label>{label}</label>
          </div>
        ));
        formLabels.add(label);
      }

      if (field.label === 'Email Address') {
        formBody.push((
          <div className="col-xs-12" key="Email">
            <label>Email</label>
          </div>
        ));
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
              required={field.required}
              autoFocus={isFirst}
            />
          ));
          isFirst = false;
          break;
        case c.SELECT_FIELD: {
          const options = field.conf.split(',').map(
            (option) => option.split(':')
          );

          if (field.label === 'State') {
            formBody.push((
              <SelectField
                key={field.name_attr}
                label={field.label}
                name={field.name_attr}
                width={field.width}
                options={options}
                required={field.required}
                default={this.props.state}
              />));
          } else {
            formBody.push((
              <SelectField
                key={field.name_attr}
                label={field.label}
                name={field.name_attr}
                width={field.width}
                options={options}
                required={field.required}
              />));
          }
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
              required={field.required}
            />
          ));
          break;
        default:
          // do nothing
          break;
      }
    }

    formBody.push((
      <div className={styles.hidden} key="hidden">
        <input type="text" />
      </div>));

    const stateWebsite = stateSites[this.props.state];

    let termsStatement;
    if (this.props.voteOrg) {
      let disclaimer;
      if (stateWebsite) {
        disclaimer = (
          <p>Built on vote.org’s voter database. If you registered within the last few months, your info may not be in the database yet. In this case, please refer to <a className={styles.link} href={stateWebsite}>your state's voter registration site</a>.</p>
        );
      } else {
        disclaimer = (
          <p>Built on vote.org’s voter database. If you registered within the last few months, your info may not be in the database yet.</p>
        );
      }
      termsStatement = (
        <div className={styles.privacy} key="privacy">
          {disclaimer}
          <p>By checking my registration, I agree to votemate's <a href="/terms" className={styles.link}>Terms of Service</a> and <a href="/privacy" className={styles.link}>Privacy Policy</a> and vote.org's <a href="https://www.vote.org/terms/" className={styles.link}>Terms of Service</a> and <a href="https://www.vote.org/privacy/" className={styles.link}>Privacy Policy</a>.</p>
        </div>
      );
    } else {
      termsStatement = (
        <div className={styles.privacy} key="privacy">
          By checking my registration, I agree to votemate's <a href="/terms" className={styles.link}>Terms of Service</a> and <a href="/privacy" className={styles.link}>Privacy Policy</a>.
        </div>
      );
    }

    formBody.push(termsStatement);

    if (formBody.length > 0) {
      formBody.push((
        <button
          key="form-submit"
          type="submit"
          className={styles.checkReg}
          name="checkregbutton"
        >Check Registration <i className="glyphicon glyphicon-check"></i> </button>
      ));
    }
    return formBody;
  }

  render() {
    return (
      <form id="checkregform" onSubmit={this.props.onSubmit}>
        {this.buildFormBody()}
      </form>
    );
  }
}

CheckRegForm.propTypes = {
  fields: React.PropTypes.array,
  hidden_fields: React.PropTypes.object,
  voteOrg: React.PropTypes.bool,
  dispatch: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
  state: React.PropTypes.string,
};

export default reduxForm({
  form: 'CheckRegForm',
  destroyOnUnmount: false,
})(CheckRegForm);
