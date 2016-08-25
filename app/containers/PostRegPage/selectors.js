import { createSelector } from 'reselect';

const selectPostRegPageDomain = () => (state) => state.get('PostRegPage');

const selectEmailStatus = () => createSelector(
  selectPostRegPageDomain(),
  (postRegDomain) => postRegDomain.get('emailStatus')
);

const selectState = () => createSelector(
  selectPostRegPageDomain(),
  (postRegDomain) => postRegDomain.get('params').state
);

const selectRegistered = () => createSelector(
  selectPostRegPageDomain(),
  (postRegDomain) => postRegDomain.get('params').registered
);

const selectFormDomain = () => (state) => state.get('form');

const selectEmail = () => createSelector(
  selectFormDomain(),
  (formDomain) => formDomain.EmailForm.values
);

export {
  selectEmailStatus,
  selectState,
  selectRegistered,
  selectEmail,
};
