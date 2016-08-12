import { createSelector } from 'reselect';

/**
 * Direct selector to the checkRegPage state domain
 */
const selectCheckRegPageDomain = () => (state) => state.get('CheckRegPage');

const selectStates = () => createSelector(
  selectCheckRegPageDomain(),
  (checkRegState) => checkRegState.get('states')
);

const selectCurrentState = () => createSelector(
  selectCheckRegPageDomain(),
  (checkRegState) => checkRegState.get('currentState')
);
 
const selectFormData = () => createSelector(
  selectCheckRegPageDomain(),
  (checkRegState) => checkRegState.get('formData')
);

const selectResults = () => createSelector(
  selectCheckRegPageDomain(),
  (checkRegState) => checkRegState.get('results')
);

const selectLoading = () => createSelector(
  selectCheckRegPageDomain(),
  (checkRegState) => checkRegState.get('loading')
);

const selectApiErrMsg = () => createSelector(
  selectCheckRegPageDomain(),
  (checkRegState) => checkRegState.get('apiErrMsg')
);

const selectFormDomain = () => (state) => state.get('form');

const selectFormValues = () => createSelector(
  selectFormDomain(),
  (formDomain) => formDomain.CheckRegForm.values
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
