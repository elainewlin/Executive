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
// import styles from './styles.css';
import StateSelect from 'components/StateSelect';
import TextField from 'components/TextField';
import SelectField from 'components/SelectField';
import CheckField from 'components/CheckField';
import HiddenField from 'components/HiddenField';
import * as selectors from './selectors';
import * as actions from './actions';
import * as c from './constants';

export class CheckRegPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(actions.fetchStates());
  }

  buildFormBody() {
    const formBody = [];
    const formData = this.props.formData;
    if (this.props.loading) {
      formBody.push(<p className="col-xs-12">Loading...</p>);
    } else if (formData) {
      for (const field of formData.fields) {
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
      if (formData.hidden_fields) {
        for (const name of Object.keys(formData.hidden_fields)) {
          formBody.push((
            <HiddenField
              key={name}
              name={name}
              value={formData.hidden_fields[name]}
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
    }
    return formBody;
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
        <div className="page-header">
          <h1><FormattedMessage {...messages.header} /></h1>
        </div>
        <form method="POST" action={this.props.formData.form_url} className="row">
          <div className="col-xs-12">
            <StateSelect states={this.props.states} onChange={this.props.onChangeState} />
          </div>
          {this.buildFormBody()}
        </form>
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
  onChangeState: React.PropTypes.func,
  dispatch: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  states: selectors.selectStates(),
  formData: selectors.selectFormData(),
  loading: selectors.selectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeState: (evt) => dispatch(actions.changeState(evt.target.value)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckRegPage);
