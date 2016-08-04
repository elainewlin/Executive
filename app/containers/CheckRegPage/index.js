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
import CheckRegForm from 'containers/CheckRegForm';
import * as selectors from './selectors';
import * as actions from './actions';

export class CheckRegPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(actions.fetchStates());
  }

  render() {
    let formBody;
    let formResults;

    // hardcoding a default form body, TO-DO: create using CheckRegForm
    formBody = (
      <form>
        <div className="form-group col-xs-6"><input type="text" className="form-control" placeholder="First" disabled></input></div>
        <div className="form-group col-xs-6"><input type="text" className="form-control" placeholder="Last" disabled></input></div>
        <div className="form-group col-xs-12"><input type="text" className="form-control" placeholder="Birthday (mm/dd/yyyy)" disabled></input></div>
        <input
        className={`btn btn-default ${styles.button}`}
        type="submit"
        id={styles.button}
        value="Check Now"
        disabled
        />
      </form>
    )
    
    if (this.props.loading) {
      formBody = <p className="col-xs-12">Loading...</p>;
    } else if (this.props.formData) {
      formBody = (
        <CheckRegForm
          fields={this.props.formData.fields}
          onSubmit={this.props.onSubmit}
        />
      );
    }
    if (this.props.results) {
      formResults = JSON.stringify(this.props.results, null, 2);
    }
    return (
      <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
        <div className="page-header">
          <h1><FormattedMessage {...messages.header} /></h1>
        </div>
        <div className={styles.checkRegPage}>
          <div className="col-xs-12">
            <StateSelect states={this.props.states} onChange={this.props.onChangeState} />
          </div>
          {formBody}
          <pre>{formResults}</pre>

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
};

const mapStateToProps = createStructuredSelector({
  states: selectors.selectStates(),
  formData: selectors.selectFormData(),
  loading: selectors.selectLoading(),
  results: selectors.selectResults(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeState: (evt) => dispatch(actions.changeState(evt.target.value)),
    onSubmit: (evt) => {
      evt.preventDefault();
      dispatch(actions.submitForm());
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckRegPage);
