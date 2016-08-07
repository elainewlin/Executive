/*
 *
 * PostRegPage
 *
 */

import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// import StateSelect from 'components/StateSelect';
import PostRegForm from 'containers/PostRegForm';

// import * as selectors from './selectors';
// import * as actions from './actions';

export class PostRegPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // this.props.dispatch(actions.fetchStates());
  }

  render() {
    return (
      <PostRegForm />
    );
  }

}

// PostRegPage.propTypes = {
//   formData: React.PropTypes.oneOfType([
//     React.PropTypes.object,
//     React.PropTypes.bool,
//   ]),
//   states: React.PropTypes.oneOfType([
//     React.PropTypes.array,
//     React.PropTypes.bool,
//   ]),
//   loading: React.PropTypes.bool,
//   results: React.PropTypes.oneOfType([
//     React.PropTypes.object,
//     React.PropTypes.bool,
//   ]),
//   onChangeState: React.PropTypes.func,
//   onSubmit: React.PropTypes.func,
//   dispatch: React.PropTypes.func,
// };

// const mapStateToProps = createStructuredSelector({
  // states: selectors.selectStates(),
  // formData: selectors.selectFormData(),
  // loading: selectors.selectLoading(),
  // results: selectors.selectResults(),
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     onChangeState: (evt) => {
//       dispatch(actions.changeState(evt.target.value))
//     },
//     onSubmit: (evt) => {
//       evt.preventDefault();
//       dispatch(actions.submitForm());
//     },
//     dispatch,
//   };
// }

export default PostRegPage;

// export default connect(mapStateToProps, mapDispatchToProps)(PostRegPage);
