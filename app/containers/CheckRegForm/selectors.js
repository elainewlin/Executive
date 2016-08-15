import { createSelector } from 'reselect';

/**
 * Direct selector to the CheckRegForm state domain
 */
const selectCheckRegFormDomain = () => (state) => state.get('checkRegPage').get('form');

const selectStates = () => createSelector(
  selectCheckRegFormDomain(),
  (checkRegState) => checkRegState.get('states')
);

const selectCurrentState = () => createSelector(
  selectCheckRegFormDomain(),
  (checkRegState) => checkRegState.get('currentState')
);

const selectFormData = () => createSelector(
  selectCheckRegFormDomain(),
  (checkRegState) => checkRegState.get('formData')
);

const selectResults = () => createSelector(
  selectCheckRegFormDomain(),
  (checkRegState) => checkRegState.get('results')
);

const selectLoading = () => createSelector(
  selectCheckRegFormDomain(),
  (checkRegState) => checkRegState.get('loading')
);

const selectApiErrMsg = () => createSelector(
  selectCheckRegFormDomain(),
  (checkRegState) => checkRegState.get('apiErrMsg')
);

const selectFormDomain = () => (state) => state.get('form');

const selectFormValues = () => createSelector(
  selectFormDomain(),
  (formDomain) => {
    console.log(formDomain);
    return formDomain.checkRegForm.values;
  }
);

export {
  selectStates,
  selectCurrentState,
  selectFormData,
  selectResults,
  selectLoading,
  selectApiErrMsg,
  selectFormValues,
};
