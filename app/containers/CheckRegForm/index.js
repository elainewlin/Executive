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
      if (!formLabels.has(label)) {
        formBody.push((
          <div className="col-xs-12" key={label}>
            <label>{label}</label>
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
          formBody.push((
            <SelectField
              key={field.name_attr}
              label={field.label}
              name={field.name_attr}
              width={field.width}
              options={options}
              required={field.required}
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
              required={field.required}
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
  dispatch: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
};

export default reduxForm({
  form: 'CheckRegForm',
  destroyOnUnmount: false,
})(CheckRegForm);
