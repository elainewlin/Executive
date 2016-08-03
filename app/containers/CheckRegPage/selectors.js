import { createSelector } from 'reselect';

/**
 * Direct selector to the checkRegPage state domain
 */
const selectCheckRegPageDomain = () => (state) => state.get('checkRegPage');

const selectStates = () => createSelector(
  selectCheckRegPageDomain(),
  (checkRegState) => checkRegState.get('states')
);

const selectFormData = () => createSelector(
  selectCheckRegPageDomain(),
  (checkRegState) => checkRegState.get('formData')
);

const selectLoading = () => createSelector(
  selectCheckRegPageDomain(),
  (checkRegState) => checkRegState.get('loading')
);

export {
  selectStates,
  selectFormData,
  selectLoading,
};
