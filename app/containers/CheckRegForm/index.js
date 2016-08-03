/*
 *
 * CheckRegForm
 *
 */

import React from 'react';
// import { connect } from 'react-redux';
// import styles from './styles.css';
import { reduxForm, change } from 'redux-form/immutable';
import TextField from 'components/TextField';
import SelectField from 'components/SelectField';
import CheckField from 'components/CheckField';
import HiddenField from 'components/HiddenField';
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
    const formBody = [];
    for (const field of this.props.fields) {
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
        case c.HIDDEN_FIELD:
          formBody.push((
            <HiddenField
              key={field.name_attr}
              name={field.name_attr}
              value={field.conf}
            />
          ));
          break;
        default:
          // do nothing
          break;
      }
    }
    if (this.props.hidden_fields) {
      for (const name of Object.keys(this.props.hidden_fields)) {
        formBody.push((
          <HiddenField
            key={name}
            name={name}
            value={this.props.hidden_fields[name]}
          />
        ));
      }
    }
    formBody.push((
      <input
        key="form-submit"
        type="submit"
        className="btn btn-default"
        value="Submit"
      />
    ));
    return formBody;
  }

  render() {
    return (
      <form>
        {this.buildFormBody()}
      </form>
    );
  }
}

CheckRegForm.propTypes = {
  fields: React.PropTypes.array,
  hidden_fields: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};

export default reduxForm({ form: 'CheckRegForm' })(CheckRegForm);
